import * as React from 'react';
import VocabList from '../modules/VocabListPage/components/VocabList';
import Heading from '../components/UI/basic/Heading';
import NewVocabList from '../modules/VocabListPage/components/NewVocabList';
import BaseLayout from '../components/BaseLayout';

class Index extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }
  }

  public handleClick = () => {
    this.setState( {clicked: !this.state.clicked})
  }
  public render() {
    return (
    <BaseLayout description={'Home'} title={'Home'}>
      <Heading fontSize={4} my={3}>Vocabulario</Heading>
      <VocabList listName={'Mis listas'}/>
      <NewVocabList/>
    </BaseLayout>
    );
  }
}

export default Index;