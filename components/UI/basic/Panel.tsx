import * as React from "react";
import {
  alignItems,
  alignSelf,
  borders,
  color,
  colorStyle,
  flex,
  flexDirection,
  flexWrap,
  fontSize,
  justifyContent,
  order,
  position,
  space,
  width,
  borderRadius,
  boxShadow
} from "styled-system";
import { IFlex } from "./Flex";
import styled from "styled-components";

export interface IPanel extends IFlex {
  border?: string;
  borderColor?: string;
  boxShadow?: string;
  opacity?: string;
}

const css = props => props.css;

const CardStyled = styled.div(
  {
    display: "flex",
    overflow: "hidden"
  },
  space,
  color,
  position,
  borders,
  width,
  fontSize,
  flex,
  alignSelf,
  order,
  flexDirection,
  justifyContent,
  flexWrap,
  alignItems,
  borderRadius,
  boxShadow,
  colorStyle,
  css
);

const Panel: React.FC<IPanel> = (props: IPanel) => {
  return <CardStyled {...props} />;
};

Panel.defaultProps = {
  p: 2,
  borderRadius: 2
};

export default Panel;
