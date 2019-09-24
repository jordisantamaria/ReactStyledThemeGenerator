import * as React from "react";
import { IBox } from "../basic/Box";
import sys from "system-components";

export interface IImage extends IBox {
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
  "color",
  "borderRadius"
);

const Image = (props: IImage) => {
  return <ImageStyled {...props} />;
};

export default Image;
