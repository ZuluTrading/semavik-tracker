/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      boxShadow: {
        card: "0 20px 60px rgba(0,0,0,0.45)"
      },
      borderRadius: {
        "3xl": "1.75rem"
      },
      colors: {
        brand: {
          DEFAULT: "#3B82F6",
          dark: "#1D4ED8"
        },
        surface: {
          dark: "#020617"
        },
        accent: {
          today: "#22c55e",
          overdue: "#ef4444",
          waiting: "#f97316"
        }
      }
    }
  },
  plugins: []
};

