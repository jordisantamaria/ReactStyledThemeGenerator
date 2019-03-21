import * as React from "react";
import Box from "./basic/Box";

interface Iprops {
  children?: any;
}
const Container = (props: Iprops) => {
  return (
    <Box p={3} m={"auto"} css={{ maxWidth: "1000px" }}>
      {props.children}
    </Box>
  );
};

export default Container;
