/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-board-bg-color": "rgba(20, 189, 172,0.8)",
        "custom-bg-color": "#ffdfba",
        "custom-text-bg-color": "rgba(203, 213, 225,0.8)"
      }
    },
  },
  plugins: [],
}

