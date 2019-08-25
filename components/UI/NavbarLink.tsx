import * as React from "react";
import { Box } from "./basic";
import { Colors } from "../../lib/Colors";
import { IBox } from "./basic/Box";
import LinkStyled from "./basic/LinkStyled";

interface INavbarLink extends IBox {
  href?: string;
  children: any;
}
const NavbarLink = (props: INavbarLink) => {
  return props.href ? (
    <LinkStyled
      {...props}
      href={props.href}
    >
      {props.children}
    </LinkStyled>
  ) : (
    <Box
      {...props}
    >
      {props.children}
    </Box>
  );
};

export default NavbarLink;
