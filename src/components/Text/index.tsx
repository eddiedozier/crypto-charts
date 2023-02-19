import React from "react";

import { AsProps } from "@shared";
import { TextElement, TextPropsExtended } from "./types";
import { text } from "./style";

export function Text<C extends React.ElementType = TextElement>({
  as,
  children,
  asProps,
  ...props
}: TextPropsExtended<C> & { asProps?: AsProps<C> }) {
  const Component = as || "span";

  return (
    <Component {...asProps} className={text({ ...props })}>
      {children}
    </Component>
  );
}

export default Text;
