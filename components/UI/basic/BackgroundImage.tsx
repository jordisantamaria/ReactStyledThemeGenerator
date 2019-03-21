import * as React from "react";
import { IBox } from "./Box";
// @ts-ignore
import { BackgroundImage as BackgroundImageRebass } from "rebass";

interface IBackgroundImage extends IBox {
  src?: string;
  backgroundSize?: string;
  backgroundPosition?: string;
}

const BackgroundImage = (props: IBackgroundImage) => {
  return <BackgroundImageRebass {...props} />;
};

export default BackgroundImage;
