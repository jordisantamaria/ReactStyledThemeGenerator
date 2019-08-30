import * as React from "react";
import ThemeLayout from "../../modules/theme/ThemeLayout";
import { Button, Flex, Heading, Panel } from "../../components/UI/basic";
import { IState } from "../../lib/redux/rootReducer";
import { withRouter } from "next/router";
import { connect } from "react-redux";
import { ITheme } from "../../lib/redux/ThemeActions";
import TextStyled from "../../components/UI/basic/Text";

interface IProps {
  theme: ITheme;
}

const Buttons = (props: IProps) => {
  return (
    <ThemeLayout>
      <Heading>Botones</Heading>
      <Flex flexWrap={"wrap"}>
        {Object.keys(props.theme.buttons).map(value => {
          return (
            <Panel width={180}>
              <TextStyled>{value}</TextStyled>
              <Button variant={value}>Boton</Button>
            </Panel>
          );
        })}
      </Flex>
    </ThemeLayout>
  );
};

const mapStateToProps = (state: IState, ownProps) => {
  return {
    ...ownProps,
    theme: state.theme
  };
};

export default connect(mapStateToProps)(withRouter(Buttons));
