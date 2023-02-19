import React from "react";
import { loader, LoaderProps } from "./style";

export function LoaderComponent(props: LoaderProps) {
  return <div className={loader({ ...props })}></div>;
}

export default LoaderComponent;
