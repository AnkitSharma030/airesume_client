/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",   // 👈 App Router (pages in app/)
    "./src/pages/**/*.{js,jsx,}", // 👈 If you also use pages/
    "./src/components/**/*.{js,jsx}",
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
