import * as React from 'react';
import {Box, Flex, Heading, Panel} from '../../../components/UI/basic';
import TextStyled from '../../../components/UI/basic/Text';
import SectionContainer from './SectionContainer';

interface IProps {
  colors: Object;
}

const ColorsSection = (props: IProps) => {
  return (
    <SectionContainer>
      <Heading fontSize={18} p={2}>
        Colors
      </Heading>
      <Flex flexWrap={"wrap"}>
        {Object.keys(props.colors).map(value => {
          return (
            <Panel width={180}>
              <TextStyled>{value}</TextStyled>
              <Box bg={props.colors[value]} css={{ height: "30px" }} />
              <TextStyled>{props.colors[value]}</TextStyled>
            </Panel>
          );
        })}
      </Flex>
    </SectionContainer>
  );
};

export default ColorsSection;
