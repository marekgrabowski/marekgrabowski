import type { FunctionalComponent } from "preact";
import { useEffect, useState } from "preact/hooks";

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Get the initial theme from localStorage or use a default value
    const initialTheme = localStorage.getItem('theme') || 'light';
    setTheme(initialTheme);

    // Use a consistent class name for the dark theme
    const handleThemeChange = (newTheme) => {
      console.log('Theme effect:', newTheme);
      if (newTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    handleThemeChange(initialTheme);

    // Watch for theme changes
    window.addEventListener('themeChange', (e) => handleThemeChange(e.detail));
    return () => {
      window.removeEventListener('themeChange', handleThemeChange);
    };
  }, []);

  const handleClick = () => {
    // Toggle theme and update localStorage
    console.log('Toggle clicked');
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);

    // Dispatch a custom event for theme change
    window.dispatchEvent(new CustomEvent('themeChange', { detail: newTheme }));
  };
  return (
    <div class="hover:scale-105 ease-in-out transition duration-100 text-lg">
    <button onClick={handleClick} aria-label="Toggle theme">
      {theme === "light" ? "🌙" : "🌞"}
    </button>
    </div>
  );
};

export default ThemeToggle;
