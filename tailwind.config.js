/* nextui 적용 */
const { nextui, commonColors } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // Next.js 13의 App Directory 사용 중이라면 필요
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    /* nextui 적용 */
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        green: {
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#01A69F",
        },
      },
    },
  },
  /* nextui 적용 */
  darkMode: "class",
  plugins: [
    nextui({
      addCommonColors: true,
    }),
  ],
};
