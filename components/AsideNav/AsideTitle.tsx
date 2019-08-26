import * as React from 'react';
import TextStyled from '../../components/UI/basic/Text';

const AsideTitle = props => {
  return (
    <TextStyled
      py={"10px"}
      px={3}
      color={'white'}
    >
      {props.children}
    </TextStyled>
  );
};

export default AsideTitle;
