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

const TableRowStyled = styled.tbody(
{
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

export const TableBody: React.FC<IBox> = (props: IBox) => {
  return <TableRowStyled {...props}/>;
};

export default TableBody;
