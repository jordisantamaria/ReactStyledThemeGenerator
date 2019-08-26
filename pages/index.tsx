import * as React from "react";
import { Box, Heading } from "../components/UI/basic";
import AsideMenu from "../components/AsideNav/AsideMenu";
import { connect } from "react-redux";
import { setSpace } from "../lib/redux/ThemeActions";

interface IIndex {
  setSpace: (space) => void;
}

const Theme = (props: IIndex) => {
  return (
    <>
      <AsideMenu />
      <Box
        pt={3}
        width={[1, "calc(100% - 200px)"]}
        ml={[0, "200px"]}
        px={[3, 4]}
      >
        <Heading as={"h5"} textAlign={"center"} mt={2}>
          INDEX
        </Heading>
      </Box>
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    setSpace: space => dispatch(setSpace(space))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Theme);
