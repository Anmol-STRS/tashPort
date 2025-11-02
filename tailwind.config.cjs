/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        cocoa: "#5E0D24",
        cocoaDark: "#3B0916",
        cream: "#F6D5DF",
        sage: "#8B1E3A",
        mint: "#C94A6F",
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
        soft: "0 12px 32px -20px rgba(61, 9, 22, 0.5)",
        elegant: "0 4px 16px -4px rgba(94, 13, 36, 0.18), 0 8px 32px -8px rgba(94, 13, 36, 0.12)",
        glow: "0 0 32px rgba(201, 74, 111, 0.28), 0 4px 16px rgba(94, 13, 36, 0.12)",
        inner: "inset 0 2px 8px rgba(94, 13, 36, 0.1)"
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
