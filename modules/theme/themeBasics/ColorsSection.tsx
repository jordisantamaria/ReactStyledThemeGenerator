import * as React from "react";
import { Flex, Heading, Panel } from "../../../components/UI/basic";
import TextStyled from "../../../components/UI/basic/Text";
import SectionContainer from "./SectionContainer";
import ColorPickerInput from "../../../components/UI/Forms/ColorPickerInput";

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
              <ColorPickerInput colorKey={value} color={props.colors[value]} />
            </Panel>
          );
        })}
      </Flex>
    </SectionContainer>
  );
};

export default ColorsSection;
