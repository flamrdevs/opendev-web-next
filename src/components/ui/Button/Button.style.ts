import { klass } from "@klass/core";

export const ButtonKlass = klass({
  base: [
    "inline-flex items-center justify-center outline-none",
    "border border-dashed rounded-xl",
    "transition",
    "focus-visible:ring-1 focus-visible:ring-offset-2",
    "active:scale-95",
  ],
  variants: {
    color: {
      neutral: [
        "bg-neutral-1 hover:bg-neutral-2 text-neutral-12 border-neutral-6",
        "focus-visible:ring-neutral-9 focus-visible:ring-offset-neutral-1",
      ],
      primary: [
        "bg-primary-1 hover:bg-primary-2 text-primary-12 border-primary-6",
        "focus-visible:ring-primary-9 focus-visible:ring-offset-primary-1",
      ],
    },
    size: {
      md: ["gap-2 px-4 py-1", "font-mono font-medium text-md"],
    },
  },
  defaults: {
    color: "neutral",
    size: "md",
  },
});
