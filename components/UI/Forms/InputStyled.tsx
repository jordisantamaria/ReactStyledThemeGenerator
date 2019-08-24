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
  width,
  borders
} from "styled-system";

import { Field } from "react-final-form";
import TextStyled, { IText } from "../basic/Text";
import { Box } from "../basic";
import { Colors } from "../../../lib/Colors";

export interface IField {
  name: string;
  type?: string;
  validate?: (value: any, allValues: object) => any;
  value?: string;
}
export interface IInputStyled extends IText, IField {
  placeholder: string;
  labelText?: string;
}

export interface IInputControlled extends IText, IField {
  placeholder: string;
  onChange: (event) => void;
}

const css = props => props.css;

const InputStyled2 = styled.input(
  {
    padding: "7px",
    width: "100%",
    ":focus": {
      border: `1px solid ${Colors.primary}`
    }
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

export const InputControlled = (props: IInputControlled) => {
  return <InputStyled2 {...props} />;
};

const InputStyled = (props: IInputStyled) => {
  const {
    name,
    validate,
    placeholder,
    type,
    value,
    labelText,
    ...otherProps
  } = props;

  const borderStyles = meta => {
    if (meta.dirty) {
      return `1px solid ${Colors.success}`;
    }
    return "";
  };
  return (
    <Field name={name} validate={props.validate}>
      {({ input, meta }) => (
        <Box {...otherProps}>
          {labelText && <label htmlFor={props.name}>{labelText}</label>}
          <InputStyled2
            {...input}
            placeholder={placeholder}
            type={type}
            border={borderStyles(meta)}
            id={name}
          />
          {meta.dirty && meta.error && (
            <TextStyled textStyle={"error"}>{meta.error}</TextStyled>
          )}
        </Box>
      )}
    </Field>
  );
};

export default InputStyled;