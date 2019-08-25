import * as React from "react";
import {Box, Flex, Heading, Panel} from '../../../components/UI/basic';
import TextStyled from "../../../components/UI/basic/Text";
import SectionContainer from './SectionContainer';

interface IProps {
  space: number[];
}
const SpaceSection = (props: IProps) => {
  return (
    <SectionContainer>
      <Heading fontSize={18} p={2}>
        Padings y margins
      </Heading>
      <Flex flexWrap={"wrap"}>
        {props.space.map(value => {
          return (
            <Panel width={180}>
              <TextStyled>{value}</TextStyled>
            </Panel>
          );
        })}
      </Flex>
    </SectionContainer>
  );
};

export default SpaceSection;
