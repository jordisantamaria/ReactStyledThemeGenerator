import * as React from 'react';
import Button from '../../../components/UI/basic/Button';
import Flex from '../../../components/UI/basic/Flex';
import {Colors} from '../../../lib/Colors';

interface Iprops {
}
interface IState {
  isOpen: boolean;
}

class NewList extends React.Component<Iprops, IState> {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    }
  }

  public toggleModal = () => {
    this.setState((state) => ({
      isOpen: !state.isOpen,
    }));
  }

  public render() {
    return (
    <React.Fragment>
      <Flex justifyContent={'center'}>
        <Button width={4/5} color={Colors.primaryDark} onClick={this.toggleModal}>
          Crear nueva lista
        </Button>
        {this.state.isOpen &&
        <div>Is open</div>
        }
      </Flex>

    </React.Fragment>
    );
  }
}

export default NewList;
