import type { Config } from "tailwindcss";

import coloradix, { gray, lime } from "@coloradix/tailwindcss";

const radix = coloradix({ gray, lime }).alias({ neutral: "gray", primary: "lime" }).build();

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      ...radix.colors,
    },
  },
  plugins: [radix.plugin],
} satisfies Config;
