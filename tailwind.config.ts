import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [daisyui, require("@tailwindcss/typography")],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#dbeafe",

          "primary-content": "#111827",

          secondary: "#60a5fa",

          "secondary-content": "#f3f4f6",

          accent: "#34d399",

          "accent-content": "#111827",

          neutral: "#e5e7eb",

          "neutral-content": "#121313",

          "base-100": "#f3f4f6",

          "base-200": "#d3d4d6",

          "base-300": "#b4b5b7",

          "base-content": "#1c1917",

          info: "#bfdbfe",

          "info-content": "#0d1116",

          success: "#bbf7d0",

          "success-content": "#0d1510",

          warning: "#fde68a",

          "warning-content": "#161307",

          error: "#fca5a5",

          "error-content": "#160a0a",
        },
      },
    ],
    darktheme: "dark",
  },
};
export default config;
