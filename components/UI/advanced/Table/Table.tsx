import * as React from 'react';
import styled from 'styled-components';
import {color, space, width} from 'styled-system';

export interface ITable {
  striped?: boolean;
  bordered?: boolean;
  borderLess?: boolean;
  hover?: boolean;

  css?: Object; //TODO s'esta repetint les propietats definides aixi 2 vegades
  m?: number | string | any[];
  mt?: number | string | any[];
  mr?: number | string | any[];
  mb?: number | string | any[];
  ml?: number | string | any[];
  mx?: number | string | any[];
  my?: number | string | any[];
  p?: number | string | any[];
  pt?: number | string | any[];
  pr?: number | string | any[];
  pb?: number | string | any[];
  pl?: number | string | any[];
  px?: number | string | any[];
  py?: number | string | any[];
  width?: number | string | any[];
  color?: string;
  bg?: string;
  children?: any;
}

const css = props => props.css;

const TableStyled = styled.table(
{
  width: "100%",
  borderCollapse: "collapse",
},
space,
width,
color,
css
);

export const Table: React.FC<ITable> = (props: ITable) => {
  const {striped, css, bordered, borderLess, hover, ...otherProps} = props;
  let stripedCss = {};
  let borderedCss = {};
  let borderLessCss = {};
  let hoverCss = {};
  if(striped) {
    stripedCss = {"tbody tr:nth-of-type(odd)": {
        backgroundColor: "rgba(0, 0, 0, 0.05)"
      }}
  }
  if(bordered) {
    borderedCss = {"td, th": {
        border: "1px solid #dee2e6"
      }}
  }
  if(borderLess) {
    borderLessCss = {"td, th": {
        border: "0"
      }}
  }
  if(hover) {
    hoverCss = {"tbody tr:hover": {
        backgroundColor: "rgba(0, 0, 0, .075)",
        transition: ".5s"
      }}
  }
  return <TableStyled {...otherProps} css={{...css, ...stripedCss, ...borderedCss, ...borderLessCss, ...hoverCss}} />;
};

export default Table;
