import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryDark: "#3E0703",
        secondary: "#660B05",
        accent: "#8C1007",
        lightBg: "#FFF0C4",
      },
      fontFamily: {
        display: ['"Baloo 2"', "system-ui", "sans-serif"],
        body: ['Montserrat', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
