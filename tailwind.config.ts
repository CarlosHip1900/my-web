import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        roboto: ["var(--font-aleo)"],
      },
    },
  },
};
export default config;
