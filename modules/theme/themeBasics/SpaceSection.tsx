import * as React from "react";
import { Flex, Heading, Panel } from "../../../components/UI/basic";
import TextStyled from "../../../components/UI/basic/Text";

interface IProps {
  space: number[];
}
const SpaceSection = (props: IProps) => {
  return (
    <>
      <Heading fontSize={18} mt={3} p={2}>
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
    </>
  );
};

export default SpaceSection;
