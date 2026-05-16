/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1D4ED8', // Primary Blue
        },
        secondary: {
          DEFAULT: '#F3F4F6', // Secondary Gray
        },
        success: {
          DEFAULT: '#22C55E', // Success Green
        },
        warning: {
          DEFAULT: '#F97316', // Warning Orange
        },
        danger: {
          DEFAULT: '#EF4444', // Danger Red
        }
      }
    },
  },
  plugins: [],
}
