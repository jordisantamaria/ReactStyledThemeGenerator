import * as React from "react";
import { IBox } from "../basic/Box";
import sys from "system-components";

interface IImage extends IBox {
  src: string;
  borderRadius?: string;
  display?: string;
  maxWidth?: string;
}

const ImageStyled = sys(
  {
    is: "img"
  },
  {
    display: "block",
    maxWidth: "100%",
    height: "auto"
  },
  "space",
  "width",
  "color"
);

const Image = (props: IImage) => {
  const imagesPath = '/static/';
  const {src, ...otherProps} = props;
  return <ImageStyled src={imagesPath + src} {...otherProps} />;
};

export default Image;
