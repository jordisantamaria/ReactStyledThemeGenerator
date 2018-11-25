import * as React from 'react';
import Button from '../../../components/UI/basic/Button';
import {Colors} from '../../../lib/Colors';

interface Iprops {
  modal: any;
}
interface IState {
  isOpen: boolean;
}

class OpenModalButton extends React.Component<Iprops, IState> {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    }
  }

  public toggleModal = () => {
    console.log('open Modal');
    this.setState((state) => ({
      isOpen: !state.isOpen,
    }));
  }

  public render() {
    return (
    <React.Fragment>
      <Button width={4/5} color={Colors.primaryDark} onClick={this.toggleModal}>
        {this.props.children}
      </Button>
      {/*{this.props.modal(this.state.isOpen, this.toggleModal)}*/}
      {React.cloneElement(this.props.modal, {
        isOpen: this.state.isOpen,
        toggleModal: this.toggleModal,
      })}
    </React.Fragment>
    );
  }
}

export default OpenModalButton;
