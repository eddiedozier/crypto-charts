import React from "react";

import { AsProps } from "@shared";
import { ButtonElement, ButtonPropsExtended } from "./types";
import { button } from "./style";

export function Button<C extends React.ElementType = ButtonElement>({
  as,
  asProps,
  children,
  ...props
}: ButtonPropsExtended<C> & {
  asProps?: AsProps<C>;
}) {
  if (as && as !== "a" && as !== "button") {
    console.error("as props should be: button or anchor");
  }
  const Component = as || "button";

  return (
    <Component {...asProps} className={button({ ...props })}>
      {children}
    </Component>
  );
}

export default Button;
