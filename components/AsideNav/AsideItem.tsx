import * as React from "react";
import LinkStyled, { ILinkStyled } from "../../components/UI/basic/LinkStyled";
import { Colors } from "../../lib/Colors";

interface IAsideItem extends ILinkStyled {
  isActive: boolean;
}
const AsideItem = (props: IAsideItem) => {
  return (
    <LinkStyled
      href={props.href}
      as={props.as}
      bg={props.isActive ? Colors.secondary : Colors.secondaryDark}
      p={"10px 10px 10px 20px"}
      color={Colors.white}
      onClick={props.onClick}
    >
      {props.children}
    </LinkStyled>
  );
};

export default AsideItem;
