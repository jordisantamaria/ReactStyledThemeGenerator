import styled from "styled-components";
import {
  borders,
  color,
  fontSize,
  position,
  space,
  width,
  colorStyle
} from "styled-system";

export interface IBox {
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
  width?: number | string | any[];
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
  position?: string;
  as?: string;
  onClick?: () => void;
  backgroundImage?: string;
  height?: string;
  colors?: string;
  key?: any;
  ref?: any;
}

const css = props => props.css;

/*const BoxStyled = styled(({ fontSize, color, bg, width, ...other }) => <div {...other} />)`
  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${position}
  ${borders}
  ${colorStyle}
  ${css}
`;*/

const BoxStyled = styled.div`
  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${position}
  ${borders}
  ${colorStyle}
  ${css}
`;

const Box = (props: IBox) => {
  return <BoxStyled {...props} />;
};

export default Box;
