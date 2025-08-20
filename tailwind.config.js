/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      // <-- YEH HISSA ADD KAREIN -->
      fontFamily: {
        'tt-commons': ['"TT Commons Pro"', 'sans-serif'],
      },
      // <-- YAHAN TAK -->
    },
  },
  plugins: [],
};