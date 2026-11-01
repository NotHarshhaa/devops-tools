/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./lib/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0f0e17",
        secondary: "#232946",
        accent: "#7f5af0",
        "accent-dark": "#6b45e9",
        "accent-light": "#a786ff",
        "text-light": "#fffffe",
        highlight: "#ff8906",
        "highlight-dark": "#e07800",
        tertiary: "#e53170",
        cardBg: "#161528",
        cardBgHover: "#1c1b38",
        "gradient-start": "#4158D0",
        "gradient-mid": "#C850C0",
        "gradient-end": "#FFCC70",
      },
      fontFamily: {
        sans: [
          "var(--font-outfit)",
          "Outfit",
          "Inter",
          "system-ui",
          "sans-serif",
        ],
        display: [
          "var(--font-space-grotesk)",
          "Space Grotesk",
          "system-ui",
          "sans-serif",
        ],
        mono: [
          "var(--font-jetbrains-mono)",
          "JetBrains Mono",
          "ui-monospace",
          "monospace",
        ],
      },
      boxShadow: {
        neon: "0 0 5px theme(colors.accent), 0 0 20px theme(colors.accent-light)",
        "neon-sm":
          "0 0 2px theme(colors.accent), 0 0 10px theme(colors.accent-light)",
        "neon-highlight":
          "0 0 5px theme(colors.highlight), 0 0 20px theme(colors.highlight)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-pattern": "url('/grid-pattern.svg')",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 3s ease-in-out infinite alternate",
        "rotate-slow": "rotate 10s linear infinite",
        "text-gradient": "text-gradient 8s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": {
            boxShadow:
              "0 0 5px theme(colors.accent), 0 0 10px theme(colors.accent)",
          },
          "100%": {
            boxShadow:
              "0 0 10px theme(colors.accent), 0 0 30px theme(colors.accent)",
          },
        },
        "text-gradient": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      transitionDuration: {
        0: "0ms",
        2000: "2000ms",
        3000: "3000ms",
      },
    },
  },
  plugins: [],
};
