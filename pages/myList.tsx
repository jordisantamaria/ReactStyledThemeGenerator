import * as React from 'react';
import Heading from '../components/UI/basic/Heading';
import BaseLayout from '../components/BaseLayout';

interface IState {

}
interface Iprops {

}
class MyList extends React.Component<Iprops, IState> {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  public render() {
    return (
    <BaseLayout title="My list" description="My personal list">
      <Heading>
        Mi lista de vocab favorita
      </Heading>
    </BaseLayout>
    );
  }
}

export default MyList;