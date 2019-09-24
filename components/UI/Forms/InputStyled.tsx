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
import {useState} from 'react';

export interface IField {
  name: string;
  type?: string;
  validate?: (value: any, allValues: object) => any;
  value?: string;
}
export interface IInputStyled extends IText, IField {
  placeholder: string;
  labelText?: string;
  labelStyles?: any;
  inputStyles?: any;
}

export interface IInputControlled extends IText, IField {
  placeholder?: string;
  onChange?: (event) => void;
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

  const {onChange, value, ...otherProps} = props;
  const [valueState, setValue] = useState(value);

  const onChangeInput = (event) => {
    setValue(event.target.value);
    onChange(event.target.value);
  }

  return <InputStyled2 {...otherProps} onChange={onChangeInput} value={valueState}/>;
};

const InputStyled = (props: IInputStyled) => {
  const {
    name,
    validate,
    placeholder,
    type,
    value,
    labelText,
    labelStyles,
    inputStyles,
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
          {labelText && <label htmlFor={props.name} style={labelStyles}>{labelText}</label>}
          <InputStyled2
            {...input}
            placeholder={placeholder}
            type={type}
            border={borderStyles(meta)}
            id={name}
            css={inputStyles}
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
