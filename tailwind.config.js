/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,jsx,ts,tsx}", // Added TypeScript file types
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container:{
      center:true,
      padding:"15px 5px",
    },
    extend: {
      colors: {
        // Primary and Secondary color shades
        primary: "var(--primary)",
        lightPrimary:"var(--lightPrimary)",
        lightGray: "var(--lightGray)",
        darkGray: "var(--darkGray)",
        // Background and foreground colors
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        sm: "640px",
        md: "780px",
        lg: "960px",
        xl: "1200px",
      },
      spacing: {
        '5rem': '5rem',
        '1rem': '1rem',
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("tailwindcss-animated")],
};
