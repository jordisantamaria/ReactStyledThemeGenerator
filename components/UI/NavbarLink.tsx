import * as React from "react";
import { Box } from "./basic";
import { Colors } from "../../lib/Colors";

const NavbarLink = props => {
  return (
    <Box
      {...props}
      css={{
        cursor: "pointer",
        ":hover": {
          backgroundColor: Colors.primaryDark
        }
      }}
    >
      {props.children}
    </Box>
  );
};

export default NavbarLink;
