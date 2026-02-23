/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFD700", // Industrial Yellow
        "background-light": "#F8F9FA",
        "background-dark": "#121212",
        "accent-dark": "#1a1a1a",
        "metal-dark": "#2a2a2a",
      },
      fontFamily: {
        display: ["Montserrat", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "4px",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries')
  ],
}
