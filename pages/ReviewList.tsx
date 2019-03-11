import * as React from "react";
import Heading from "../components/UI/basic/Heading";
import { withRouter } from "next/router";
import { Mutation, Query } from "react-apollo";
import { Box, Button, Flex, Text } from "../components/UI/basic";
import { IVocabItem } from "../modules/VocabListPage/model";
import Container from "../components/UI/Container";
import { WordItemReview } from "../modules/ReviewPage/WordItemReview";
import { GET_REVIEW_LIST_ITEMS_QUERY } from "./index";
import { gql } from "apollo-boost";
import Link from "next/link";

interface IState {
  itemsReviewedId: number[];
}
interface Iprops {
  router: any;
}

export const UPDATE_ITEMS_REVIEWED = gql`
  mutation updateReviewedItems($ids: [ID!]) {
    vocabItemsReviewed(ids: $ids) {
      toReviewDate
    }
  }
`;

class MyList extends React.Component<Iprops, IState> {
  constructor(props) {
    super(props);
    this.state = {
      itemsReviewedId: []
    };
  }

  public addItemReviewed = id => {
    this.setState(state => ({
      itemsReviewedId: [...state.itemsReviewedId, id]
    }));
  };

  public render() {
    return (
      <React.Fragment>
        <Query
          query={GET_REVIEW_LIST_ITEMS_QUERY}
          variables={{ listName: this.props.router.query.listName }}
        >
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
            if (
              !data ||
              !data.vocabItemsReview ||
              !data.vocabItemsReview.VocabItems
            ) {
              return null;
            }
            const vocabItems = data.vocabItemsReview.VocabItems;
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
                    Lista de repaso
                  </Heading>
                </Box>
                <Container>
                  <Text mb={3}>
                    Si no te acuerdas de una palabra, al pulsar para ver su
                    significado, se añadira automaticamente en tus proximos
                    repasos, sino iran apareciendo cada vez con menos
                    frecuencia, para terminar la sesion de repaso, dale click al
                    boton finalizar repaso.
                  </Text>
                  {vocabItems.map((item: IVocabItem, index) => (
                    <WordItemReview
                      index={index}
                      item={item}
                      key={item.id}
                      reviewed={this.addItemReviewed}
                    />
                  ))}
                </Container>
              </React.Fragment>
            );
          }}
        </Query>
        <Flex justifyContent={"center"} my={3}>
          {/*fer que en update, borrar la llista de repas*/}
          <Mutation
            mutation={UPDATE_ITEMS_REVIEWED}
            update={cache => {
              //cuando no son datos puros, ejemplo listas, hay que añadir manualmente los nuevos datos a la cache de graphql
              cache.writeQuery({
                query: GET_REVIEW_LIST_ITEMS_QUERY,
                data: { vocabItemsReview: null }
              });
            }}
          >
            {updateItems => (
              <Link href={"/"}>
                <Button
                  onClick={() => {
                    updateItems({
                      variables: { ids: this.state.itemsReviewedId }
                    });
                  }}
                >
                  Finalizar Repaso
                </Button>
              </Link>
            )}
          </Mutation>
        </Flex>
      </React.Fragment>
    );
  }
}

export default withRouter(MyList);
