import sys from "system-components";

export interface IBox {
  fontSize?: number | number[];
  css?: Object;
  m?: number | string;
  mt?: number | string;
  mr?: number | string;
  mb?: number | string;
  ml?: number | string;
  mx?: number | string;
  my?: number | string;
  p?: number | string;
  pt?: number | string;
  pr?: number | string;
  pb?: number | string;
  pl?: number | string;
  px?: number | string;
  py?: number | string;
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
  borderRadius?: string;
  position?: string;
  is?: string;
  onClick?: () => void;
}

const css = props => props.css;

const BoxStyled = sys("space", "color", "fontSize", "width", "position", css);

const Box = (props: IBox) => <BoxStyled {...props} />;
export default Box;
