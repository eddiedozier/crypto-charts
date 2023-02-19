import React, { forwardRef } from "react";
import { input, InputProps } from "./style";

type InputExtendedProps = InputProps &
  React.InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<InputExtendedProps> = forwardRef<
  HTMLInputElement,
  InputExtendedProps
>(function Input({ area, ...props }, ref) {
  return <input ref={ref} {...props} className={input({ area })} />;
});

export default Input;
