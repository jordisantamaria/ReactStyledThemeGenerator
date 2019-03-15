import * as React from "react";
import { connect } from "react-redux";
import { loginUser } from "../lib/redux/UserActions";
import auth from "../lib/Auth/AuthService";
import Router from "next/router";

interface IProps {
  className?: string;
  loginUser: (user) => void;
}

class Callback extends React.Component<IProps, any> {
  public async componentDidMount() {
    await auth.handleAuthentication();
    //funciona, fallo de types
    //TODO que redireccione a la Url de donde proviene, guardando url by localstorage
    Router.push("/");
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
