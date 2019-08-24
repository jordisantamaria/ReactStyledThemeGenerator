import * as React from "react";
import { IText } from "./Text";
import {
  color,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  space,
  textAlign,
  width,
  textStyle,
  borders
} from "styled-system";
import styled from "styled-components";

const css = props => props.css;

const HeadingStyled = styled("h2")(
  {
    fontSize: "24px",
    fontWeight: "bold",
    lineHeight: 1.25,
    margin: 0
  },
  space,
  width,
  fontSize,
  color,
  fontWeight,
  textAlign,
  lineHeight,
  fontFamily,
  textStyle,
  borders,
  css
);

const Heading = (props: IText) => {
  return <HeadingStyled {...props} />;
};

export default Heading;
