import * as React from 'react';
import styled from 'styled-components';
import {
  borders,
  color,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  space,
  textAlign,
  textStyle,
  width
} from 'styled-system';
import {IText} from '../basic/Text';
import {Colors} from '../../../lib/Colors';
import {IField} from './InputStyled';

export interface IInput extends IText, IField {
  placeholder?: string;
  id: any;
  disabled?: boolean;
}

const css = props => props.css;

const InputStyled2 = styled.input(
{
  padding: "6px 12px",
  width: "100%",
  borderRadius: ".25rem",
  lineHeight: '1.5',
  border: "1px solid #ced4da",
  ":focus": {
    border: `1px solid ${Colors.primary}`
  },
  ":hover:enabled": {
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

export const Input: React.FC<IInput> = (props: IInput) => {
  return <InputStyled2 {...props}/>;
};

export default Input;
