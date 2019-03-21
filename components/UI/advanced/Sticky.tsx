import * as React from "react";
import { Box } from "../basic";

const Sticky = props => {
  return <Box {...props} css={{ position: "sticky" }} />;
};

export default Sticky;
