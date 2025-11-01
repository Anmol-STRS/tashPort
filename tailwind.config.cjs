/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        cocoa: "#5A3E36",
        cocoaDark: "#3F2B25",
        cream: "#F7F2EE",
        sage: "#A7B8A0",
        mint: "#DCE8D2",
        charcoal: "#2C2C2C"
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
        soft: "0 12px 32px -20px rgba(58, 42, 35, 0.45)",
        elegant: "0 4px 16px -4px rgba(90, 62, 54, 0.15), 0 8px 32px -8px rgba(90, 62, 54, 0.1)",
        glow: "0 0 32px rgba(167, 184, 160, 0.25), 0 4px 16px rgba(90, 62, 54, 0.1)",
        inner: "inset 0 2px 8px rgba(90, 62, 54, 0.08)"
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
