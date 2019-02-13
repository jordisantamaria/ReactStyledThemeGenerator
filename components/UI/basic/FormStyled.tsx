import * as React from "react";
import sys from "system-components";
import { IBox } from "./Box";

export interface IForm extends IBox {
  flexWrap?: string;
  flexDirection?: string;
  alignItems?: string;
  justifyContent?: string;
  onSubmit: (...args) => void;
}

const css = props => props.css;

const FormStyled2 = sys(
  {
    is: "form"
  },
  "space",
  "color",
  "fontSize",
  "width",
  "position",
  css
);
const FormStyled = (props: IForm) => {
  return <FormStyled2 {...props} />;
};

export default FormStyled;
