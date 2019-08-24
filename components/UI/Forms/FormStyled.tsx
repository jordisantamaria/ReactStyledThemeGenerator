import * as React from "react";
import { IBox } from "../basic/Box";
import styled from "styled-components";
import {
  borders,
  color,
  fontSize,
  position,
  space,
  width
} from "styled-system";

export interface IForm extends IBox {
  onSubmit: (...args) => void;
}

const css = props => props.css;

const FormStyled2 = styled.form`
  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${position}
  ${borders}
  ${css}
`;
const FormStyled = (props: IForm) => {
  return <FormStyled2 {...props} />;
};

export default FormStyled;
