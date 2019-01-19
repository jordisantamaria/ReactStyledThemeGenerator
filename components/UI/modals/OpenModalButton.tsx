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
    console.log("open Modal");
    this.setState(state => ({
      isOpen: !state.isOpen
    }));
  };

  public render() {
    return (
      <React.Fragment>
        {/*<Button width={4/5} color={Colors.primaryDark} onClick={this.toggleModal}>
        {this.props.children}
      </Button>*/}
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
