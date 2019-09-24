import * as React from 'react';
import {Image} from '../../basic';
import {IImage} from '../Image';

const CardImage: React.FC<IImage> = (props: IImage) => {
  return <Image {...props}  />;
};

CardImage.defaultProps = {
  borderRadius: 'calc(.25rem - 1px) calc(.25rem - 1px) 0 0',
};

export default CardImage;
