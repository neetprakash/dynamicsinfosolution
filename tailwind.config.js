/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT(
  {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily:{
          roboto:"var(--font-roboto)",
          josefin:"var(--font-josefin)",
          lexend:"var(--font-lexend)",
          quantico:"var(--font-quantico)",
  
        }
      },
    },
    plugins: [],
  }
)