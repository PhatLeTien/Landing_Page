const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
    flowbite.content(),
  ],
  theme: {
    screens: {
      sm: "390px",
      md: "1024px",
      lg: "1440px",
    },
    extend: {},
  },
  plugins: [flowbite.plugin()],
};
