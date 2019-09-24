import * as React from 'react';
import {Box} from '../../basic';
import {IBox} from '../../basic/Box';

const CardFooter: React.FC<IBox> = (props: IBox) => {
  return <Box {...props}  />;
};

CardFooter.defaultProps = {
  p: '12px 20px',
  bg: 'rgba(0,0,0,.03)',
  borderTop: '1px solid rgba(0,0,0,.125)'
};

export default CardFooter;
