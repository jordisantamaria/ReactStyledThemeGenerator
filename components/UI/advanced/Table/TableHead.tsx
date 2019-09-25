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

const TableHeadStyled = styled.thead(
{
  " th": {
    borderTop: "none",
    borderBottom: "2px solid #dee2e6"
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

export const TableHead: React.FC<IBox> = (props: IBox) => {
  return <TableHeadStyled {...props}/>;
};

export default TableHead;
