import * as React from 'react';
import sys from 'system-components'
import {IBox} from './Box';
import { variant } from 'styled-system'

interface IButton extends IBox{
  border?: string;
  borderColor?: string;
  borderRadius?: string;
  boxShadow?: string;
  opacity?: string;
  variant?: string;
}

const cardVariants = variant({
  key: 'cards'
})

export const CardStyled = sys({
    p: 2,
    bg: 'white',
    borderRadius: 2,
    boxShadow: 2
  }, {
    overflow: 'hidden'
  },
  'space', 'color',
  cardVariants
);

const Card = (props: IButton) => {
  return (
    <CardStyled {...props}/>
  );
}

export default Card;