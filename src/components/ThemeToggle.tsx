import { useTheme } from "./useTheme";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      type="button"
      onClick={toggle}
      className="inline-flex items-center justify-center rounded-xl border border-black/15 px-3 py-2 text-sm
                 hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2
                 dark:border-white/15 dark:hover:bg-white/10 dark:focus-visible:ring-white dark:focus-visible:ring-offset-black"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
}
