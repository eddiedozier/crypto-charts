import React, { forwardRef } from "react";
import { flex, FlexProps } from "./style";
import { FlexElement } from "./types";

type FlexExtendedProps<C extends React.ElementType = FlexElement> = FlexProps &
  React.InputHTMLAttributes<C>;

export const Flex: React.FC<FlexExtendedProps> = forwardRef<
  HTMLInputElement,
  FlexExtendedProps
>(function Flex({ as, asProps, children, ...rest }, ref) {
  const Component = as || "div";

  return (
    <Component ref={ref} {...asProps} className={flex({ ...rest })}>
      {children}
    </Component>
  );
});

export default Flex;
