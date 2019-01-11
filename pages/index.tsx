import * as React from 'react';
import Heading from '../components/UI/basic/Heading';
import BaseLayout from '../components/BaseLayout';
import ListGroup from '../modules/VocabListPage/components/ListGroup';
import {IState} from '../lib/store/rootReducer';
import {connect} from 'react-redux';
import Container from '../components/UI/Container';
import OpenModalButton from '../components/UI/modals/OpenModalButton';
import CreateVocabListModal from '../components/UI/modals/CreateVocabListModal/CreateVocabListModal';
import Flex from '../components/UI/basic/Flex';
import { Query } from "react-apollo";
import gql from "graphql-tag";

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
    console.log("render index");
    return (
    <BaseLayout description={'Home'} title={'Home'}>
      <Heading fontSize={22} px={3} py={2} color={'primaryDark'} bg={'secondaryLight'} mb={2}
        css={{background: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(129,224,255,1) 100%);'}}>
        Mis listas
      </Heading>
      <Container>
        {this.props.reviewList && this.props.reviewList.length > 0 &&
          <ListGroup listName={'Repaso'} lists={this.props.reviewList}/>
        }
        <Query
          query={gql`
          {
            vocabLists {
              listName
            }
          }
        `}
        >
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
            console.log("vocabaLists query data = ", data);
            return <ListGroup listName={'Vocabulario'} lists={data.vocabLists}/>;
          }}
        </Query>

        <Flex justifyContent={'center'} mt={3}>
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