import * as React from 'react';
import {IBox} from './Box';
import sys from 'system-components'
import { style } from 'styled-system'

interface IBackgroundImage extends IBox{
  src?: string;
  backgroundSize?: string;
  backgroundPosition?: string;
}

const bgImage = style({
  prop: 'image',
  alias: 'src',
  cssProperty: 'backgroundImage',
  getter: n => `url(${n})`
})

const BackgroundImageStyled = sys({
  width: 1,
  ratio: 3/4,
  backgroundSize: 'cover',
  backgroundPosition: 'center'
},
bgImage,
'ratio',
'backgroundSize',
'backgroundPosition',
'space',
'color',
);

const BackgroundImage = (props: IBackgroundImage) => {
  return (
    <BackgroundImageStyled {...props}/>
  );
};

export default BackgroundImage;