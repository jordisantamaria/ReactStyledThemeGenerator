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
import {Colors} from '../../../lib/Colors';
import {IInput} from './Input';

const css = props => props.css;

const SelectStyled = styled.select(
{
  padding: "6px 12px",
  width: "100%",
  borderRadius: ".25rem",
  lineHeight: '1.5',
  border: "1px solid #ced4da",
  ":focus": {
    border: `1px solid ${Colors.primary}`
  },
  ":hover": {
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

export const Select: React.FC<IInput> = (props: IInput) => {
  return <SelectStyled {...props}/>;
};

export default Select;
