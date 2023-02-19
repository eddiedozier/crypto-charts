import { PolymorphicComponentProp } from "@shared";
import type { ButtonProps } from "./style";

export type ButtonPropsExtended<C extends React.ElementType> =
  PolymorphicComponentProp<C, ButtonProps>;

export type ButtonElement = "button" | "a";
