import * as React from "react";
import AsideMenu from "../../components/AsideNav/AsideMenu";
import { Box } from "../../components/UI/basic";

const ThemeLayout = props => {
  return (
    <>
      <AsideMenu />
      <Box py={4} width={["calc(100% - 200px)"]} ml={["200px"]} px={[3, 4]}>
        {props.children}
      </Box>
    </>
  );
};

export default ThemeLayout;
