import * as React from 'react';
import ThemeLayout from '../../modules/theme/ThemeLayout';
import {Heading} from '../../components/UI/basic';
import {IState} from '../../lib/redux/rootReducer';
import {withRouter} from 'next/router';
import {connect} from 'react-redux';
import {ITheme} from '../../lib/redux/ThemeActions';

interface IProps {
  theme: ITheme;
}

const Tables = (props: IProps) => {
  return (
  <ThemeLayout>
    <Heading>Tablas</Heading>
  </ThemeLayout>
  );
};

const mapStateToProps = (state: IState, ownProps) => {
  return {
    ...ownProps,
    theme: state.theme
  };
};

export default connect(mapStateToProps)(withRouter(Tables));
