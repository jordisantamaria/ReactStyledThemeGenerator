import ThemeLayout from '../../modules/theme/ThemeLayout';
import {Heading} from '../../components/UI/basic';
import {IState} from '../../lib/redux/rootReducer';
import {withRouter} from 'next/router';
import {connect} from 'react-redux';
import {ITheme} from '../../lib/redux/ThemeActions';

interface IProps {
  theme: ITheme;
}

const Forms = (props: IProps) => {
  return (
  <ThemeLayout>
    <Heading>Forms</Heading>
  </ThemeLayout>
  );
};

const mapStateToProps = (state: IState, ownProps) => {
  return {
    ...ownProps,
    theme: state.theme
  };
};

export default connect(mapStateToProps)(withRouter(Forms));
