/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./lib/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        paper: "var(--color-paper)",
        "paper-2": "var(--color-paper-2)",
        "paper-3": "var(--color-paper-3)",
        ink: "var(--color-ink)",
        "ink-2": "var(--color-ink-2)",
        muted: "var(--color-muted)",
        rule: "var(--color-rule)",
        "rule-2": "var(--color-rule-2)",
        accent: "var(--color-accent)",
        "accent-ink": "var(--color-accent-ink)",
        "accent-soft": "var(--color-accent-soft)",
        "accent-text": "var(--color-accent-text)",
        cool: "var(--color-cool)",
        "cool-soft": "var(--color-cool-soft)",
        ok: "var(--color-ok)",
        bad: "var(--color-bad)",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-outlier)"],
      },
      borderRadius: {
        card: "var(--radius-card)",
        pill: "var(--radius-pill)",
      },
      maxWidth: {
        container: "var(--container)",
      },
    },
  },
  plugins: [],
};
