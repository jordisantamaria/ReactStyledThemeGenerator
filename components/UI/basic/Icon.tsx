import * as React from "react";
import { default as Box, IBox } from "./Box";

interface Iprops extends IBox {
  className: string;
}

const Icon = (props: Iprops) => {
  return <Box {...props} />;
};

export default Icon;
