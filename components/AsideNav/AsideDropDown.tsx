import * as React from "react";
import ToggleContent from "../../components/UI/advanced/ToggleContent";
import TextStyled from "../../components/UI/basic/Text";
import { Colors } from "../../lib/Colors";
import { IBox } from "../../components/UI/basic/Box";

interface IAsideDropDown extends IBox {
  title: string;
}

const AsideDropDown = (props: IAsideDropDown) => {
  return (
    <ToggleContent
      container={isOpen => (
        <TextStyled
          bg={isOpen ? Colors.secondary : Colors.secondaryDark}
          p={"10px 10px 10px 20px"}
          color={Colors.white}
          onClick={props.onClick}
          css={{ cursor: "pointer" }}
        >
          {props.title}
        </TextStyled>
      )}
    >
      {() => props.children}
    </ToggleContent>
  );
};

export default AsideDropDown;
