import * as React from "react";
import { Flex, Heading, Panel } from "../../../components/UI/basic";
import TextStyled from "../../../components/UI/basic/Text";
import SectionContainer from './SectionContainer';

interface IProps {
  fontSizes: number[];
}

const FontSizesSection = (props: IProps) => {
  return (
    <SectionContainer>
      <Heading fontSize={18} p={2}>
        Font sizes
      </Heading>
      <Flex flexWrap={"wrap"}>
        {props.fontSizes.map(value => {
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

export default FontSizesSection;
