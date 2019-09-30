import * as React from "react";
import Box, { IBox } from "../../basic/Box";

const Container = (props: IBox) => {
  return (
    <Box width={[1, 1, 1000, 1170]} mx={"auto"} px={3} {...props}>
      {props.children}
    </Box>
  );
};

export default Container;
