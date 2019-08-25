import * as React from "react";
import { Flex, Heading, Panel } from "../../../components/UI/basic";
import TextStyled from "../../../components/UI/basic/Text";

interface IProps {
  breakpoints: number[];
}

const BreakpointsSection = (props: IProps) => {
  return (
    <>
      <Heading fontSize={18} mt={3} p={2}>
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
    </>
  );
};

export default BreakpointsSection;
