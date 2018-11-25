import * as React from 'react';
import Heading from '../components/UI/basic/Heading';
import BaseLayout from '../components/BaseLayout';
import ListGroup from '../modules/VocabListPage/components/ListGroup';
import {IState} from '../lib/store/rootReducer';
import {connect} from 'react-redux';
import Container from '../components/UI/Container';
import OpenModalButton from '../components/UI/modals/OpenModalButton';
import CreateVocabListModal from '../components/UI/modals/CreateVocabListModal';
import Flex from '../components/UI/basic/Flex';

interface IProps {
  customLists: any[];
  reviewList: any[];
}
class Index extends React.Component<IProps, any> {
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
      <Heading fontSize={22} px={3} py={2} color={'primaryDark'} bg={'secondaryLight'} mb={2}
        css={{background: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(129,224,255,1) 100%);'}}>
        Mis listas
      </Heading>
      <Container>
        <ListGroup listName={'Repaso'} list={this.props.reviewList}/>
        <ListGroup listName={'Vocabulario'} list={this.props.customLists}/>
        <Flex justifyContent={'center'}>
          <OpenModalButton modal={<CreateVocabListModal/>}>
            Crear nueva lista
          </OpenModalButton>
        </Flex>
      </Container>
    </BaseLayout>
    );
  }
}

const mapStateToProps = (state: IState, ownProps) => {
  return ({
    ...ownProps,
    customLists: state.vocabList.customLists,
    reviewList: state.vocabList.reviewList
  });
}

export default connect(mapStateToProps)(Index);