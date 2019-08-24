import * as React from "react";
import styled from "styled-components";
import {
  space,
  width,
  fontSize,
  color,
  fontWeight,
  textAlign,
  lineHeight,
  fontFamily,
  textStyle,
  borders
} from "styled-system";
import { IBox } from "./Box";

export interface IText extends IBox {
  fontFamily?: string;
  fontWeight?: string;
  textAlign?: string;
  lineHeight?: string;
  letterSpacing?: string;
  margin?: string;
  textStyle?: string;
}

const css = props => props.css;

const TextStyled2 = styled.p`
  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${fontWeight}
  ${textAlign}
  ${lineHeight}
  ${fontFamily}
  ${textStyle}
  ${css}
  ${borders}
`;

const TextStyled = (props: IText) => {
  return <TextStyled2 {...props} />;
};

export default TextStyled;
