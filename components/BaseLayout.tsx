import * as React from "react";
import Head, { IHeadProps } from "./Head";
import Nav from "./UI/Nav";
import AuthService from "../lib/Auth/AuthService";

interface ILayoutProps extends IHeadProps {
  children?: any;
}

interface IState {
  isAuthenticated: boolean;
  loggedUser: any;
}

class BaseLayout extends React.Component<ILayoutProps, IState> {
  public authService = null;

  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      loggedUser: {}
    };
  }
  public componentDidMount(): void {
    this.authService = new AuthService();
    if (localStorage.getItem("isLoggedIn") === "true") {
      this.setState(() => ({
        isAuthenticated: true
      }));
    }
  }

  public login = () => {
    this.authService.login();
    console.log("login");
    if (this.authService.isAuthenticated()) {
      this.setState(() => ({
        isAuthenticated: true
      }));
    }
  };

  public logout = () => {
    this.authService.logout();
    console.log("logout");
    this.setState(() => ({
      isAuthenticated: false
    }));
  };

  public render() {
    return (
      <React.Fragment>
        <Head title={this.props.title} description={this.props.description} />
        <Nav
          login={this.login}
          logout={this.logout}
          isAuthenticated={this.state.isAuthenticated}
        />
        {this.props.children}
      </React.Fragment>
    );
  }
}

export default BaseLayout;
