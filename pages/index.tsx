import * as React from "react";
import { Box, Text } from "../components/UI/basic";

const Index = () => {
  return (
    <Box
      css={{
        backgroundImage: `url(static/sakuratrick.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "calc(100vh - 54px)",
        backgroundPosition: "center"
      }}
    >
      <Box bg={"white"} width={"200px"}>
        <Text textAlign={"center"} fontSize={"20px"} py={3}>
          Hello World
        </Text>
      </Box>
    </Box>
  );
};

export default Index;
