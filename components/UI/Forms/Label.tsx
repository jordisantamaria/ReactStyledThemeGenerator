import * as React from 'react';
import styled from 'styled-components';
import {
  borders,
  color,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  space,
  textAlign,
  textStyle,
  width
} from 'styled-system';
import {IText} from '../basic/Text';

export interface ILabel extends IText {
  htmlFor: string;
}

const css = props => props.css;

const LabelStyled = styled.label`
  display: inline-block;
  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${fontWeight}
  ${textAlign}
  ${lineHeight}
  ${fontFamily}
  ${textStyle}
  ${css}
  ${borders}
`;

const Label: React.FC<ILabel> = (props: ILabel) => {
  return <LabelStyled {...props}/>;
};

Label.defaultProps = {
  mb: 2,
};

export default Label;
