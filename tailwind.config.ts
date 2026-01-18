import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        roboto: ["var(--font-inter-sans)"],
      },
    },
  },
};
export default config;
