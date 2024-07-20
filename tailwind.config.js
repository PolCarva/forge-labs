/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#92F414",
          hover: "#7adb07",
        },
        secondary: "#2d3748",
        accent: "#e53e3e",
        background: "#f7fafc",
        text: "#2d3748",
        muted: "#e2e8f0",
      },
    },
  },
  plugins: [],
};
