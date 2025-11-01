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
        soft: "0 12px 32px -20px rgba(58, 42, 35, 0.45)"
      }
    }
  },
  plugins: []
};
