/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        cocoa: "#6E1030",
        cocoaDark: "#4A0A1D",
        cream: "#FFE5EE",
        sage: "#A02347",
        mint: "#E5567F",
        charcoal: "#0B0204"
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          "sans-serif"
        ]
      },
      boxShadow: {
        soft: "0 12px 32px -20px rgba(74, 10, 29, 0.6)",
        elegant: "0 4px 16px -4px rgba(110, 16, 48, 0.22), 0 8px 32px -8px rgba(110, 16, 48, 0.16)",
        glow: "0 0 40px rgba(229, 86, 127, 0.35), 0 4px 20px rgba(110, 16, 48, 0.18)",
        inner: "inset 0 2px 8px rgba(110, 16, 48, 0.12)"
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem'
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem'
      }
    }
  },
  plugins: []
};
