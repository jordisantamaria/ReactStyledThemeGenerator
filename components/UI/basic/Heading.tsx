import * as React from 'react';
import {IText} from './Text';
import sys from 'system-components'

export const HeadingStyled = sys({
  is: 'h2',
  fontSize: 5,
  fontWeight: 'bold',
  lineHeight: 1.25,
  m: 0
},
'color',
'textAlign'
)

const Heading = (props: IText) => {
  return (
    <HeadingStyled {...props}/>
  );
}

export default Heading;