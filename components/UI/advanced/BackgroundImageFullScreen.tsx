import sys from "system-components";
//TODO sys is deprecated, change for @rebass/components

export interface IBox {
  fontSize?: string | number | number[];
  css?: Object; //TODO s'esta repetint les propietats definides aixi 2 vegades
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
  backgroundImage?: string;
  height?: string;
}

const css = props => props.css;

const BoxStyled = sys("space", "color", "fontSize", "width", "position", css);

const BackgroundImageFullScreen = (props: IBox) => {
  if (props.backgroundImage) {
    const { backgroundImage, css, ...otherProps } = props;
    return (
      <BoxStyled
        {...otherProps}
        css={{
          ...css,
          backgroundImage: `url(static/${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: props.height ? props.height : "calc(100vh - 54px)",
          backgroundPosition: "center"
        }}
      />
    );
  }
  const { height, css, ...otherProps } = props;
  return <BoxStyled {...otherProps} css={{ ...css, height: height }} />;
};

export default BackgroundImageFullScreen;
