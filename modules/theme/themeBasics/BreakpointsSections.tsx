import * as React from "react";
import { Flex, Heading, Panel } from "../../../components/UI/basic";
import TextStyled from "../../../components/UI/basic/Text";
import SectionContainer from './SectionContainer';

interface IProps {
  breakpoints: string[];
}

const BreakpointsSection = (props: IProps) => {
  return (
    <SectionContainer>
      <Heading fontSize={18} p={2}>
        Breakpoints
      </Heading>
      <Flex flexWrap={"wrap"}>
        {props.breakpoints.map(value => {
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

export default BreakpointsSection;
