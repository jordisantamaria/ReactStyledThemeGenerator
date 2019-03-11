import * as React from "react";
import AuthService from "../lib/Auth/AuthService";

interface IProps {
  className?: string;
}

class Callback extends React.Component<IProps, any> {
  private authService = null;

  public componentDidMount(): void {
    this.authService = new AuthService();
    this.authService.handleAuthentication();
  }

  public render() {
    return (
      <div className={[this.props.className].join(" ")}>
        Esto es la pagina de callback
      </div>
    );
  }
}

export default Callback;
