import * as React from "react";
import { Box, Text } from "../components/UI/basic";
import Container from "../components/UI/Container";

class Index extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  public handleClick = () => {};
  public render() {
    return (
      <Box backgroundImage={"sakuratrick.jpg"}>
        <Container>
          <Box bg={"white"} width={"200px"}>
            <Text textAlign={"center"} fontSize={"20px"} py={3}>
              Hello World
            </Text>
          </Box>
        </Container>
      </Box>
    );
  }
}

export default Index;
