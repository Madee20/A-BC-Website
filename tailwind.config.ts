import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0B2036",
        ink: "#00101F",
        cream: "#F7F7F5",
        slate: "#8A97A8",
        brass: "#C9A24E",
        "brass-light": "#DDBE79",
        "line-light": "#D8D6D0",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      backgroundImage: {
        "ledger-rules":
          "repeating-linear-gradient(to bottom, transparent 0px, transparent 43px, rgba(176,141,79,0.09) 44px)",
      },
      screens: {
        xs: "420px",
      },
      letterSpacing: {
        widest2: "0.14em",
      },
    },
  },
  plugins: [],
};

export default config;
