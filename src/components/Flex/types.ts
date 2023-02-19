import { PolymorphicComponentProp } from "@shared";
import { FlexProps } from "./style";

export type FlexPropsExtended<C extends React.ElementType> =
  PolymorphicComponentProp<C, FlexProps>;

export type FlexElement = "div" | "main" | "nav" | "footer";
