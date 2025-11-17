"use client";

import { useTheme } from "next-themes";

export default function DarkToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      {theme === "dark" ? "🌞" : "🌙"}
    </button>
  );
}
