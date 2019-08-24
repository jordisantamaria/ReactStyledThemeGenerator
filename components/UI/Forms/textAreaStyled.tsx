import * as React from "react";
import styled from "styled-components";
import {
  color,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  space,
  textAlign,
  textStyle,
  width
} from "styled-system";

import { Field } from "react-final-form";
import TextStyled, { IText } from "../basic/Text";
import { IField } from "./InputStyled";

export interface ITextAreaStyled extends IText, IField {
  placeholder: string;
  rows: any;
}

const css = props => props.css;

const TextAreaStyled2 = styled.textarea(
  {
    padding: "10px"
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
  css
);

const TextAreaStyled = (props: ITextAreaStyled) => {
  const { name, validate, ...otherProps } = props;
  return (
    <Field name={props.name} validate={props.validate}>
      {({ input, meta }) => (
        <div>
          <TextAreaStyled2 {...input} {...otherProps} />
          {meta.touched && meta.error && (
            <TextStyled textStyle={"error"}>{meta.error}</TextStyled>
          )}
        </div>
      )}
    </Field>
  );
};

export default TextAreaStyled;
