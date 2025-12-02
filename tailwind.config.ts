import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        moss: '#4A5D23',
        washi: '#F9F7F2',
        gold: '#C5A059',
      },
    },
  },
  plugins: [],
};

export default config;

