/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--bg) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        border: "rgb(var(--border) / <alpha-value>)",
        fg: "rgb(var(--fg) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        "accent-contrast": "rgb(var(--accent-contrast) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Fraunces", "ui-serif", "Georgia", "serif"],
      },
      fontSize: {
        xs: ["calc(0.75rem * var(--type-scale))", { lineHeight: "1.4" }],
        sm: ["calc(0.875rem * var(--type-scale))", { lineHeight: "1.5" }],
        base: ["calc(1rem * var(--type-scale))", { lineHeight: "1.6" }],
        lg: ["calc(1.125rem * var(--type-scale))", { lineHeight: "1.6" }],
        xl: ["calc(1.25rem * var(--type-scale))", { lineHeight: "1.4" }],
        "2xl": ["calc(1.5rem * var(--type-scale))", { lineHeight: "1.3" }],
        "3xl": ["calc(1.875rem * var(--type-scale))", { lineHeight: "1.2" }],
        "4xl": ["calc(2.25rem * var(--type-scale))", { lineHeight: "1.1" }],
        "5xl": ["calc(3rem * var(--type-scale))", { lineHeight: "1.05" }],
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.06)",
      },
      borderRadius: {
        "xl": "1rem",
        "2xl": "1.25rem",
        "3xl": "1.5rem",
      },
      letterSpacing: {
        tightish: "-0.02em",
      },
    },
  },
  plugins: [],
};
