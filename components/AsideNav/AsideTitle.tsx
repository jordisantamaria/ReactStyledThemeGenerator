import * as React from "react";
import TextStyled from "../../components/UI/basic/Text";
import { Colors } from "../../lib/Colors";

const AsideTitle = props => {
  return (
    <TextStyled
      bg={Colors.secondaryDark}
      py={"10px"}
      px={3}
      color={Colors.white}
    >
      {props.children}
    </TextStyled>
  );
};

export default AsideTitle;
