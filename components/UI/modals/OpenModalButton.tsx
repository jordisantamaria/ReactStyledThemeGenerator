import * as React from "react";

interface Iprops {
  modal: any;
  children: any;
}
interface IState {
  isOpen: boolean;
}

class OpenModalButton extends React.Component<Iprops, IState> {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  public toggleModal = () => {
    this.setState(state => ({
      isOpen: !state.isOpen
    }));
  };

  public render() {
    return (
      <React.Fragment>
        {React.cloneElement(this.props.children, {
          onClick: this.toggleModal
        })}
        {React.cloneElement(this.props.modal, {
          isOpen: this.state.isOpen,
          toggleModal: this.toggleModal
        })}
      </React.Fragment>
    );
  }
}

export default OpenModalButton;
