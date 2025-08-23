/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",   // 👈 App Router (pages in app/)
    "./src/pages/**/*.{js,ts,jsx,tsx}", // 👈 If you also use pages/
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px", // custom breakpoint
      },
    },
  },
  plugins: [],
};
