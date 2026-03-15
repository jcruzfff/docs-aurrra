"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="flex items-center justify-center w-9 h-9 rounded-md border border-border dark:border-[#3F3F46] bg-surface-alt dark:bg-[#121212] text-fg-muted dark:text-[#A1A1AA] hover:bg-gray-100 dark:hover:bg-[#27272A] hover:text-fg dark:hover:text-[#FAFAFA] hover:border-gray-300 dark:hover:border-[#52525B] transition-colors"
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4" />
      ) : (
        <Moon className="w-4 h-4" />
      )}
    </button>
  );
}
