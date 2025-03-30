import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./pages/**/*.{vue,js,ts}",
    "./app/**/*.{vue,js,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [typography],
};

export default config;
