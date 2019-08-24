import * as React from "react";
import Box from "./basic/Box";

interface Iprops {
  children?: any;
}
const Container = (props: Iprops) => {
  return (
    <Box
      mt={3}
      p={3}
      m={"auto"}
      css={{ maxWidth: "1000px" }}
      bg={"white"}
      borderRadius={"8px"}
    >
      {props.children}
    </Box>
  );
};

export default Container;
