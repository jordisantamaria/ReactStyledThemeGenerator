import * as React from "react";
import AuthService from "../lib/Auth/AuthService";
import { connect } from "react-redux";
import { loginUser } from "../lib/redux/UserActions";

interface IProps {
  className?: string;
  loginUser: (user) => void;
}

class Callback extends React.Component<IProps, any> {
  private authService = null;

  public componentDidMount(): void {
    this.authService = new AuthService();
    this.authService.handleAuthentication().then(user => {
      console.log("after authentication = ", user);
      this.props.loginUser(user);
    });
  }

  public render() {
    return (
      <div className={[this.props.className].join(" ")}>
        Esto es la pagina de callback
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginUser: user => dispatch(loginUser(user))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Callback);
