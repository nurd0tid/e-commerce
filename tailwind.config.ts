import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "custom-blue": "#0055AA",
        "custom-gray": "#CCCCCC",
        "custom-gray-rgb": "rgba(85,85,85,.8)",
        "custom-gray-rgb1": "rgba(0, 0, 0, .4)",
        "custom-gray-rgb2": "rgba(0, 0, 0, .8)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
