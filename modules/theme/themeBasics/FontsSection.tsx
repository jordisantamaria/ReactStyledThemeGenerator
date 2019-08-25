import * as React from "react";
import {Box, Flex, Heading, Panel} from '../../../components/UI/basic';
import TextStyled from "../../../components/UI/basic/Text";
import SectionContainer from './SectionContainer';

interface IProps {
  fonts: Object;
}

const FontsSection = (props: IProps) => {
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
              <TextStyled>{props.fonts[value]}</TextStyled>
            </Panel>
          );
        })}
      </Flex>
    </SectionContainer>
  );
};

export default FontsSection;
