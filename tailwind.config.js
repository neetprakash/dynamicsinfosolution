/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT(
  {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
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