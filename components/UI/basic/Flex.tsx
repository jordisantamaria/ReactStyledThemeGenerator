import * as React from "react";
import { IBox } from "./Box";
import styled from "styled-components";
import {
  alignItems,
  alignSelf,
  borders,
  color,
  flex,
  flexDirection,
  flexWrap,
  fontSize,
  justifyContent,
  order,
  position,
  space,
  width
} from "styled-system";

export interface IFlex extends IBox {
  flexWrap?: string;
  flexDirection?: string;
  alignItems?: string;
  justifyContent?: string;
  order?: string;
}

const css = props => props.css;

const FlexStyled = styled.div(
  {
    display: "flex",
    flexWrap: "wrap"
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
  css
);

const Flex = (props: IFlex) => {
  return <FlexStyled {...props} />;
};

export default Flex;
