import * as React from "react";
import Heading from "../components/UI/basic/Heading";
import BaseLayout from "../components/BaseLayout";
import { withRouter } from "next/router";
import { Query } from "react-apollo";
import { Box, Button, Flex, Text } from "../components/UI/basic";
import { IVocabItem, IVocabList } from "../modules/VocabListPage/model";
import Container from "../components/UI/Container";
import { WordItemReview } from "../modules/ReviewPage/WordItemReview";
import { GET_REVIEW_LIST_ITEMS_QUERY } from "./index";
import uniq from "lodash/uniq";

interface IState {
  itemsReviewed: IVocabList;
}
interface Iprops {
  router: any;
}

class MyList extends React.Component<Iprops, IState> {
  constructor(props) {
    super(props);
    this.state = {
      itemsReviewed: {
        listName: null,
        VocabItems: []
      }
    };
  }

  public addItemReviewed = item => {
    console.log("item have been reviewed ", item);
    this.setState(state => ({
      itemsReviewed: {
        listName: state.itemsReviewed.listName,
        VocabItems: uniq([...state.itemsReviewed.VocabItems, item])
      }
    }));
  };

  public render() {
    return (
      <BaseLayout title="My list" description="My personal list">
        <Query
          query={GET_REVIEW_LIST_ITEMS_QUERY}
          variables={{ listName: this.props.router.query.listName }}
        >
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
            const vocabItems = data.vocabItemsReview.VocabItems;
            if (this.state.itemsReviewed.listName === null) {
              this.setState(state => ({
                itemsReviewed: {
                  listName: data.vocabItemsReview.listName,
                  VocabItems: state.itemsReviewed.VocabItems
                }
              }));
            }
            console.log("vocab items = ", vocabItems);
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
          <Button
            onClick={() => {
              console.log("items to review = ", this.state.itemsReviewed);
            }}
          >
            Finalizar Repaso
          </Button>
        </Flex>
      </BaseLayout>
    );
  }
}

export default withRouter(MyList);
