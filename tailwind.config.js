/** @type {import('tailwindcss').Config} */

// Colours are CSS variables (RGB channels) defined in src/index.css, so the
// whole palette swaps for dark mode and opacity modifiers like `bg-accent/10` work.
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: token("paper"), // page background
        "paper-alt": token("paper-alt"), // alternating section background
        surface: token("surface"), // cards
        "surface-alt": token("surface-alt"), // chips, inset panels
        line: token("line"), // hairline borders
        "line-strong": token("line-strong"),
        ink: token("ink"), // headings
        "ink-soft": token("ink-soft"), // body copy
        muted: token("muted"), // secondary / meta text
        accent: token("accent"), // wine
        "accent-soft": token("accent-soft"),
        "accent-line": token("accent-line"),
        highlight: token("highlight"),
        "highlight-soft": token("highlight-soft"),
        // The terminal/code panels stay dark in both themes.
        term: {
          bg: "#0f1b26",
          bar: "#172634",
          line: "#2a3b4b",
          text: "#e3ebf2",
          dim: "#8da0b2",
          prompt: "#7cc7ea",
          key: "#ff9f8a",
          fn: "#7cc7ea",
          str: "#a8d5a2",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        mono: [
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Consolas",
          "monospace",
        ],
      },
    },
  },
  plugins: [],
};
