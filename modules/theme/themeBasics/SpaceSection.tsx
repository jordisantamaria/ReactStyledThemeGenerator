import * as React from 'react';
import {Flex, Heading, Panel} from '../../../components/UI/basic';
import SectionContainer from './SectionContainer';
import {connect} from 'react-redux';
import {InputControlled} from '../../../components/UI/Forms/InputStyled';
import {INumberArrayValue, setSpace} from '../../../lib/redux/ThemeActions';

interface IProps {
  space: number[];
  setSpace: (space) => void
}
const SpaceSection = (props: IProps) => {

  const onChangeInput = (index, value) => {
    if(parseInt(value) >= 0 ) {
      const spaceTheme: INumberArrayValue = {
        index: index,
        value: parseInt(value),
      }
      console.log('spaceTheme = ', spaceTheme);
      props.setSpace(spaceTheme);
    }
  }

  return (
    <SectionContainer>
      <Heading fontSize={18} p={2}>
        Padings y margins
      </Heading>
      <Flex flexWrap={"wrap"}>
        {props.space.map((value, index) => {
          return (
            <Panel width={180}>
              <InputControlled name={`space${index}`} value={`${value}`} onChange={onChangeInput.bind(this, index)}/>
            </Panel>
          );
        })}
      </Flex>
    </SectionContainer>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    setSpace: space => dispatch(setSpace(space))
  };
};

export default connect(
null,
mapDispatchToProps
)(SpaceSection);
