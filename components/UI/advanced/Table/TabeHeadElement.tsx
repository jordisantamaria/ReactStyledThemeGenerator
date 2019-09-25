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

const TableHeadElementStyled = styled.th(
{
  padding: "1.1rem .75rem 1rem",
  verticalAlign: "bottom",
  borderTop: "1px solid #dee2e6",
  textAlign: "inherit",
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

export const TableHeadElement: React.FC<IBox> = (props: IBox) => {
  return <TableHeadElementStyled {...props}/>;
};

export default TableHeadElement;
