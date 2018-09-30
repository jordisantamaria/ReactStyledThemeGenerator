import * as React from 'react';
import {IBox} from './Box';
import sys from 'system-components'

interface IImage extends IBox{
  height?: number | number[];
  src?: string;
  borderRadius?: string;
  display?: string;
  maxWidth?: string;
}

const ImageStyled = sys({
  is: 'img',
}, {
  display: 'block',
  maxWidth: '100%',
  height: 'auto'
},
'space',
'width',
'color'
)

const Image = (props: IImage) => {
  return (
  <ImageStyled {...props}/>
  );
}

export default Image;