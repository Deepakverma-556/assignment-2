import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        lg: "1025px",
        md: "770px",
      },
      colors: {
        lightPurple: "#df2bff",
        lightSky: "#00b7ff",
        sky: "00ddff",
        lightGray: "#343434",
        lightBlue: "#407BFF3D",
      },
      fontFamily: {
        poppins: ["Poppins", "serif"],
        roboto: ["Roboto", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
