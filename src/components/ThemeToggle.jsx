import { Moon, Sun } from "lucide-react";

export default function ThemeToggle({ dark, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="rounded-full border border-slate-300 p-2.5
                 text-slate-700 transition hover:bg-slate-100
                 dark:border-slate-700 dark:text-yellow-300
                 dark:hover:bg-slate-800"
    >
      {dark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}