import * as React from 'react';
import sys from 'system-components'
import { variant } from 'styled-system'
import {default as Flex, IFlex} from './Flex';

interface ICard extends IFlex{
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
    is: Flex,
    p: 2,
    borderRadius: 2,
    boxShadow: 2,
    variant: 'primaryLight',
  }, {
    overflow: 'hidden'
  },
  'space', 'color',
  cardVariants
);

const Card = (props: ICard) => {
  return (
    <CardStyled {...props}/>
  );
}

export default Card;