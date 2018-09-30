import * as React from 'react';
import {default as Box, IBox} from './Box';
import sys from 'system-components'

interface Iprops extends IBox {
  flexWrap?: string;
  flexDirection?: string;
  alignItems?: string;
  justifyContent?: string;
}

const FlexStyled = sys({
    is: Box,
  },
  { display: 'flex' },
  'alignItems',
  'justifyContent',
  'flexDirection',
  'flexWrap',
)
const Flex = (props: Iprops) => {
  return (
    <FlexStyled {...props}/>
  );
}

export default Flex;