import * as React from "react";
import { Flex, Heading, Panel } from "../../../components/UI/basic";
import TextStyled from "../../../components/UI/basic/Text";

interface IProps {
  fontSizes: number[];
}

const FontSizesSection = (props: IProps) => {
  return (
    <>
      <Heading fontSize={18} mt={3} p={2}>
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
    </>
  );
};

export default FontSizesSection;
