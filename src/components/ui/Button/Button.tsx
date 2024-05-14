import { klassed } from "@klass/react";

import { ButtonKlass } from "./Button.style.ts";

const Button = klassed("button", ButtonKlass, {
  dp: {
    type: "button",
  },
});

export default Button;
