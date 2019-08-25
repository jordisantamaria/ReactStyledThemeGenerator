import * as React from "react";
import { Box, Flex, Heading, Panel } from "../../../components/UI/basic";
import TextStyled from "../../../components/UI/basic/Text";

interface IProps {
  colors: Object;
}

const ColorsSection = (props: IProps) => {
  return (
    <>
      <Heading fontSize={18} mt={3} p={2}>
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
    </>
  );
};

export default ColorsSection;
