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
        'minty': '#BFDCCF',
        'bluegreen': '#5F968E',
        'fadedred': '#E05858',
        'oatmeal': '#D5C9B1',
        'cinzamedio': '#E4E3DB',
        'grass': '#5A5F37',
        'greenbean': '#68A225'
      },
    },
  },
  plugins: [],
};
