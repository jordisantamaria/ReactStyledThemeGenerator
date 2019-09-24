import * as React from "react";
import {Box, Flex, Heading} from '../../../components/UI/basic';
import TextStyled from "../../../components/UI/basic/Text";
import SectionContainer from './SectionContainer';
import Card from '../../../components/UI/advanced/Card/Card';
import CardBody from '../../../components/UI/advanced/Card/CardBody';

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
            <Box p={2} width={180}>
              <TextStyled>{value}</TextStyled>
            </Box>
          );
        })}
      </Flex>
    </SectionContainer>
  );
};

export default BreakpointsSection;
