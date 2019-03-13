import * as React from "react";
import Head, { IHeadProps } from "./Head";
import Nav from "./UI/Nav";
import AuthService, { isAuthenticated } from "../lib/Auth/AuthService";
import { connect } from "react-redux";
import { loginUser, updateUserExpiresAt } from "../lib/redux/UserActions";
import { IState } from "../lib/redux/rootReducer";
import { IUser } from "../lib/redux/UserReducer";

interface ILayoutProps extends IHeadProps {
  children?: any;
  user: IUser;
  isAuthenticated: boolean;
  loginUser: (user: IUser) => void;
  updateUserExpiresAt: (expiresAt: string) => void;
}

class BaseLayout extends React.Component<ILayoutProps> {
  public authService = null;

  constructor(props) {
    super(props);
  }
  public componentDidMount(): void {
    console.log("Component Did mount");
    this.authService = new AuthService();
    this.authService.updateExpiresAt(expiresAt => {
      //TODO update expires at a redux
      console.log("updateExpiresAt = ", expiresAt);
      this.props.updateUserExpiresAt(expiresAt);
    });
    //obtenir access token e id
    //obtenir profile

    // ==> obtenir user
    if (!this.props.isAuthenticated) {
      const user = this.authService.getUser();
      if (user !== null) {
        this.props.loginUser(user);
      }
    }
  }

  public login = () => {
    this.authService.login();
    console.log("login");
  };

  public logout = () => {
    this.authService.logout();
    console.log("logout");
  };

  public render() {
    return (
      <React.Fragment>
        <Head title={this.props.title} description={this.props.description} />
        <Nav
          login={this.login}
          logout={this.logout}
          isAuthenticated={this.props.isAuthenticated}
        />
        {this.props.children}
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginUser: user => dispatch(loginUser(user)),
    updateUserExpiresAt: expiresAt => dispatch(updateUserExpiresAt(expiresAt))
  };
};

const mapStateToProps = (state: IState, ownProps) => {
  return {
    ...ownProps,
    user: state.user,
    isAuthenticated: isAuthenticated(state.user.expiresAt)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BaseLayout);
