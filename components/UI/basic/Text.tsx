import sys from 'system-components'
import {IBox} from './Box';

export interface IText extends IBox{
  fontFamily?: string;
  fontWeight?: string;
  textAlign?: string;
  lineHeight?: string;
  letterSpacing?: string;
}
export const TextStyled = sys({
    m: 0
  },
  'space',
  'color',
  'fontSize',
  'fontWeight',
  'textAlign',
  'lineHeight',
  'fontFamily',
);
const Text = (props: IText) => {
  return (
    <TextStyled {...props}/>
  );
};

export default Text;