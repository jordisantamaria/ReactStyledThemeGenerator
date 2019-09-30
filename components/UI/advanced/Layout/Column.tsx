import * as React from "react";
import { Box } from "../../basic";
import styled from "styled-components";
import { MediaQueries } from "../../../../lib/Breakpoints";
import { borderRadius, borders, color, fontSize, space } from "styled-system";

interface IColumn {
  fontSize?: string | number | number[];
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
  color?: string;
  bg?: string;
  children?: any;
  border?: string;
  borderTop?: string;
  borderRight?: string;
  borderBottom?: string;
  borderLeft?: string;
  borderColor?: string;
  borderRadius?: string | number;
  onClick?: () => void;
  key?: any;
  ref?: any;
}
interface IProps extends IColumn {
  size?: number; //default size
  sm?: number;
  md?: number;
  lg?: number;
}

const Column = (props: IProps) => {
  const { size, sm, md, lg, css, ...otherprops } = props;

  const ResponsiveColumn = styled(Box)`
    ${MediaQueries.tablet} {
      flex-grow: ${sm};
      ${sm ? "flex-basis: 0" : ""}
    }
    ${MediaQueries.desktop} {
      flex-grow: ${md};
      ${!sm && md ? "flex-basis: 0" : ""}
    }
    ${MediaQueries.desktopLarge} {
      flex-grow: ${lg};
      ${!sm && !md && lg ? "flex-basis: 0" : ""}
    }
    ${space}
    ${fontSize}
    ${color}
    ${borders}
    ${props => props.css}
    ${borderRadius}
  `;

  let defaultFlexBasis = "0";
  if ((!size && sm) || md || lg) {
    defaultFlexBasis = "100%";
  }

  return (
    <ResponsiveColumn
      css={{
        flexBasis: defaultFlexBasis,
        flexGrow: size ? size : 1,
        ...css
      }}
      {...otherprops}
    />
  );
};

export default Column;
