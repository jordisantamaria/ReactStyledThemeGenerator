import * as React from 'react';
import {Flex, Heading, Panel} from '../../../components/UI/basic';
import TextStyled from '../../../components/UI/basic/Text';
import SectionContainer from './SectionContainer';
import {InputControlled} from '../../../components/UI/Forms/InputStyled';
import {setThemeFontFamily} from '../../../lib/redux/ThemeActions';
import {connect} from 'react-redux';

interface IProps {
  fonts: Object;
  setThemeFontFamily: (font) => void;
}

const FontsSection = (props: IProps) => {

  const onChangeInput = (key, value) => {
    console.log('value = ', value);
    if(value.length > 3) {
      const themeFontFamily = {};
      themeFontFamily[key] = value;
      props.setThemeFontFamily(themeFontFamily);
    }
  }

  return (
    <SectionContainer>
      <Heading fontSize={18} p={2}>
        Fuentes
      </Heading>
      <Flex flexWrap={"wrap"}>
        {Object.keys(props.fonts).map(value => {
          return (
            <Panel width={180}>
              <TextStyled>{value}</TextStyled>
              <InputControlled name={value} value={props.fonts[value]} onChange={onChangeInput.bind(this, value)}/>
            </Panel>
          );
        })}
      </Flex>
    </SectionContainer>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    setThemeFontFamily: font => dispatch(setThemeFontFamily(font))
  };
};

export default connect(
null,
mapDispatchToProps
)(FontsSection);
