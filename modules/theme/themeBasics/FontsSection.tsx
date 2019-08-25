import * as React from "react";
import { Flex, Heading, Panel } from "../../../components/UI/basic";
import TextStyled from "../../../components/UI/basic/Text";

interface IProps {
  fonts: Object;
}

const FontsSection = (props: IProps) => {
  return (
    <>
      <Heading fontSize={18} mt={3} p={2}>
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
    </>
  );
};

export default FontsSection;
