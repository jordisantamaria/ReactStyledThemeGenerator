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
import {IBox} from '../../basic/Box';

const css = props => props.css;

const TableElementStyled = styled.td(
{
  padding: "1.1rem .75rem 1rem",
  verticalAlign: "bottom",
  borderTop: "1px solid #dee2e6"
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

export const TableElement: React.FC<IBox> = (props: IBox) => {
  return <TableElementStyled {...props}/>;
};

export default TableElement;
