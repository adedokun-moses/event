/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          background: "#F0FFF4",
          primary: "#1B5E20",
          secondary: "#4CAF50",
          accent: "#2E7D32",
          hover: "#256D27",
          border: "#C8E6C9",
          white: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
}
