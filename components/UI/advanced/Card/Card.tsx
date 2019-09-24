import * as React from 'react';
import {Box} from '../../basic';
import {IBox} from '../../basic/Box';

const Card: React.FC<IBox> = (props: IBox) => {
  return (
    <Box {...props}/>
  );
};

Card.defaultProps = {
  boxShadow: 'small',
  borderRadius: '.25rem'
};

export default Card;
