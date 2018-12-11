import sys from 'system-components'

export interface IBox {
  fontSize?: number | number[];
  css?: Object;
  m?: number | string;
  mt?: number;
  mr?: number;
  mb?: number;
  ml?: number;
  mx?: number;
  my?: number;
  p?: number;
  pt?: number;
  pr?: number;
  pb?: number;
  pl?: number;
  px?: number;
  py?: number;
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


const BoxStyled = sys(
  'space',
  'color',
  'fontSize',
  'width',
  'position',
  css,
);

const Box = (props: IBox) => (
  <BoxStyled {...props}/>
)
export default Box;