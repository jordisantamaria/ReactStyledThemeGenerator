import * as React from 'react';
import {Box} from '../../basic';
import {IBox} from '../../basic/Box';


const CardBody: React.FC<IBox> = (props: IBox) => {
  return (
    <Box {...props}/>
  );
};

CardBody.defaultProps = {
  p: '24px 20px',
};

export default CardBody;
