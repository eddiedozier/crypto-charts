import { PolymorphicComponentProp } from "@shared";
import { TextProps } from "./style";

export type TextPropsExtended<C extends React.ElementType> =
  PolymorphicComponentProp<C, TextProps>;

export type TextElement =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "q"
  | "a";
