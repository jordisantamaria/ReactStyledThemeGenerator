import * as React from 'react';
import ThemeLayout from '../../modules/theme/ThemeLayout';
import {Flex, Heading, Panel} from '../../components/UI/basic';
import {IState} from '../../lib/redux/rootReducer';
import {withRouter} from 'next/router';
import {connect} from 'react-redux';
import {ITheme} from '../../lib/redux/ThemeActions';
import Card from '../../components/UI/advanced/Card';

interface IProps {
  theme: ITheme;
}

const Cards = (props: IProps) => {
  return (
  <ThemeLayout>
    <Heading>Cards</Heading>
    <Flex flexWrap={"wrap"} my={3}>
      <Card width={200} title={'Example'}>
        Card body
      </Card>
    </Flex>

    <Heading>Panels</Heading>
    <Flex flexWrap={"wrap"} my={3}>
      <Panel>
        Panel body
      </Panel>
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

export default connect(mapStateToProps)(withRouter(Cards));
