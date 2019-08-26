import * as React from "react";
import { Heading } from "../../components/UI/basic";
import { connect } from "react-redux";
import { ITheme, setSpace } from "../../lib/redux/ThemeActions";
import { RouterProps, withRouter } from "next/router";
import ThemeLayout from "../../modules/theme/ThemeLayout";
import { IState } from "../../lib/redux/rootReducer";
import ColorsSection from "../../modules/theme/themeBasics/ColorsSection";
import SpaceSection from "../../modules/theme/themeBasics/SpaceSection";
import FontsSection from "../../modules/theme/themeBasics/FontsSection";
import FontSizesSection from "../../modules/theme/themeBasics/FontSizesSection";
import BreakpointsSection from "../../modules/theme/themeBasics/BreakpointsSections";

interface IProps {
  setSpace: (space) => void;
  router: RouterProps;
  theme: ITheme;
}

const Index = (props: IProps) => {
  console.log("colors = ", Object.keys(props.theme.colors));
  return (
    <ThemeLayout>
      <Heading pb={2}>Aspectos basicos del tema</Heading>
      <ColorsSection colors={props.theme.colors} />
      <SpaceSection space={props.theme.space} />
      <FontsSection fonts={props.theme.fonts} />
      <FontSizesSection fontSizes={props.theme.fontSizes} />
      <BreakpointsSection breakpoints={props.theme.breakpoints} />
    </ThemeLayout>
  );
};

const mapStateToProps = (state: IState, ownProps) => {
  return {
    ...ownProps,
    theme: state.theme
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setSpace: space => dispatch(setSpace(space))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Index));
