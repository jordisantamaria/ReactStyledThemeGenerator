import * as React from 'react';
import {default as Box, IBox} from './Box';
import sys from 'system-components'

export interface IFlex extends IBox {
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
const Flex = (props: IFlex) => {
  return (
    <FlexStyled {...props}/>
  );
}

export default Flex;