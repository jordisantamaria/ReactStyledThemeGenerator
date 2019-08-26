import * as React from "react";
import Head, { IHeadProps } from "./Head";
import Nav from "./UI/Nav";
import auth, { isAuthenticated } from "../lib/Auth/AuthService";
import { connect } from "react-redux";
import { loginUser, updateUserExpiresAt } from "../lib/redux/UserActions";
import { IState } from "../lib/redux/rootReducer";
import { IUser } from "../lib/redux/UserReducer";
import { withRouter } from "next/router";
import { ThemeProvider } from "styled-components";
import { ITheme } from "../lib/redux/ThemeActions";

interface ILayoutProps extends IHeadProps {
  children?: any;
  user: IUser;
  loginUser: (user: IUser) => void;
  updateUserExpiresAt: (expiresAt: string) => void;
  router: any;
  expiresAt: string;
  theme: ITheme;
}

class BaseLayout extends React.Component<ILayoutProps> {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false
    };
  }
  public async componentDidMount() {
    //obtenir access token e id
    //obtenir profile

    auth.updateExpiresAt(expiresAt => {
      console.log("updateExpiresAt = ", expiresAt);
      if (expiresAt !== this.props.expiresAt) {
        this.props.updateUserExpiresAt(expiresAt);
      }
    });
    await auth.init();
    this.checkAuthRoutes();
    this.initUser();
  }

  private checkAuthRoutes = () => {
    if (!auth.isAuthenticated() && this.props.router.pathname === "/myList") {
      console.log("Path No Autorizada");
      auth.login();
    } else {
      console.log("Path autorizada");
    }
  };
  private initUser = () => {
    const user = auth.getUser();
    if (user !== null) {
      this.props.loginUser(user);
      console.log("router baselayout = ", this.props.router);
    }
  };

  public login = () => {
    auth.login();
  };

  public logout = () => {
    auth.logout();
    console.log("logout");
  };

  public render() {

    console.log('component updated theme = ', this.props.theme);
    return (
      <ThemeProvider theme={this.props.theme}>
        <React.Fragment>
          <Head title={this.props.title} description={this.props.description} />
          <Nav
            login={this.login}
            logout={this.logout}
            isAuthenticated={isAuthenticated(this.props.expiresAt)}
          />
          {this.props.children}
        </React.Fragment>
      </ThemeProvider>
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
    expiresAt: state.user.expiresAt,
    theme: state.theme
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(BaseLayout));
