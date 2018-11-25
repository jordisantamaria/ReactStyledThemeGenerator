import * as React from 'react';
import {default as Box, IBox} from './Box';
import sys from 'system-components'

interface Iprops extends IBox {
  className: string;
}

const IconStyled = sys({
  is: Box,
}
);
const Icon = (props: Iprops) => {
  return (
    <IconStyled {...props}/>
  );
}

export default Icon;