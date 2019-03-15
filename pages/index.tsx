import * as React from "react";
import Heading from "../components/UI/basic/Heading";
import ListGroup from "../modules/VocabListPage/components/ListGroup";
import Container from "../components/UI/Container";
import OpenModalButton from "../components/UI/modals/OpenModalButton";
import CreateVocabListModal from "../modules/VocabListPage/components/CreateVocabListModal/CreateVocabListModal";
import Flex from "../components/UI/basic/Flex";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Box, Button } from "../components/UI/basic";
import { Colors } from "../lib/Colors";

interface IProps {
  customLists: any[];
  reviewList: any[];
}

export const GET_LIST_NAMES_QUERY = gql`
  {
    vocabLists {
      listName
    }
  }
`;

export const GET_REVIEW_LIST_ITEMS_QUERY = gql`
  {
    vocabItemsReview {
      listName
      VocabItems {
        id
        word
        translation
        pronunciation
        association
      }
    }
  }
`;
class Index extends React.Component<IProps, any> {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  public handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  public render() {
    return (
      <React.Fragment>
        <Box
          css={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(129,224,255,1) 150%);"
          }}
        >
          <Heading
            fontSize={22}
            px={3}
            py={2}
            color={"primaryDark"}
            mb={2}
            m={"auto"}
            css={{ maxWidth: "1000px" }}
          >
            Mis listas
          </Heading>
        </Box>
        <Container>
          <Query query={GET_REVIEW_LIST_ITEMS_QUERY}>
            {({ loading, error, data }) => {
              if (loading) return <p>Loading...</p>;
              if (error) return <p>Error :(</p>;
              return data.vocabItemsReview ? (
                <ListGroup
                  listName={data.vocabItemsReview.listName}
                  lists={[data.vocabItemsReview]}
                  review={true}
                />
              ) : null;
            }}
          </Query>
          <Query query={GET_LIST_NAMES_QUERY}>
            {({ loading, error, data }) => {
              if (loading) return <p>Loading...</p>;
              if (error)
                return <ListGroup listName={"Vocabulario"} lists={null} />;
              return (
                <ListGroup listName={"Vocabulario"} lists={data.vocabLists} />
              );
            }}
          </Query>

          <Flex justifyContent={"center"} mt={3}>
            <OpenModalButton modal={<CreateVocabListModal />}>
              <Button width={4 / 5} color={Colors.primaryDark}>
                Crear nueva lista
              </Button>
            </OpenModalButton>
          </Flex>
        </Container>
      </React.Fragment>
    );
  }
}

export default Index;
