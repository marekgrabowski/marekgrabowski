import type { FunctionalComponent } from "preact";
import { useEffect, useState } from "preact/hooks";

const ThemeToggle: FunctionalComponent<{}> = () => {
  // Get the initial theme from localStorage or use a default value
  const initialTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState<string>(initialTheme);

  const handleClick = () => {
    // Toggle theme and update localStorage
    console.log("Toggle clicked");
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Use a consistent class name for the dark theme
  useEffect(() => {
    console.log("Theme effect:", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <button onClick={handleClick} aria-label="Toggle theme">
      {theme === "light" ? "🌙" : "🌞"}
    </button>
  );
};

export default ThemeToggle;
