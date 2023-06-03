/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: ["animation-waving-hand"],
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
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0deg)" },
          "20%": { transform: "rotate(10deg)" },
          "50%": { transform: "rotate(0deg)" },
          "80%": { transform: "rotate(-10deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        "waving-hand": "wave 1s linear infinite",
      },
    },
  },
  plugins: [],
};
