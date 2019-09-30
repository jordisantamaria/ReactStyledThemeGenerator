import * as React from "react";
import { Heading } from "../../components/UI/basic";
import ThemeLayout from "../../modules/theme/ThemeLayout";
import Container from "../../components/UI/advanced/Layout/Container";
import Row from "../../components/UI/advanced/Layout/Row";
import Column from "../../components/UI/advanced/Layout/Column";

const LayoutView = () => {
  return (
    <ThemeLayout>
      <Heading mb={3}>Container</Heading>
      <Container mb={3}>Container</Container>

      <Heading mb={3}>Row & Columns</Heading>
      <Row>
        <Column mr={[3]} bg={"red"} css={{ color: "white" }}>
          a
        </Column>
        <Column size={1} sm={2} bg={"blue"}>
          b
        </Column>
      </Row>
      <Row>
        <Column bg={"primary"} mr={[0, 3]} sm={6} md={3}>
          Column1
        </Column>
        <Column bg={"pink"} mr={[0, 3]} sm={3}>
          Column2
        </Column>
        <Column bg={"red"} sm={3} md={6}>
          Column2
        </Column>
      </Row>
    </ThemeLayout>
  );
};

export default LayoutView;
