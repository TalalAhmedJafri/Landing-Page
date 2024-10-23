import { url } from "inspector";
import type { Config } from "tailwindcss";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faB } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      }, 
      backgroundImage: {
        Image: "url('https://img.freepik.com/free-vector/gradient-blur-pink-blue-abstract-background_53876-117324.jpg?ga=GA1.1.1305217353.1703097734&semt=ais_hybrid')",
        Cover: "url('https://img.freepik.com/free-photo/luxury-plain-green-gradient-abstract-studio-background-empty-room-with-space-your-text-picture_1258-88064.jpg?ga=GA1.1.1305217353.1703097734&semt=ais_hybrid')",
      },
  },
  plugins: [],
}
 }
export default config;