import * as React from "react";
import { isPair } from "../../lib/utils";
import { IVocabItem } from "../VocabListPage/model";
import { Button, Flex, Text } from "../../components/UI/basic";
import ListItem from "../../components/UI/ListItem";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import { GET_LIST_ITEMS_BY_LISTNAME_QUERY } from "../../pages/myList";

interface IProps {
  className?: string;
  item: IVocabItem;
  index: number;
  listName: string;
}

interface IState {
  isOpen: boolean;
}

export const LEARNED_VOCAB_ITEM = gql`
  mutation learnedVocab($id: Int) {
    vocabItemLearned(id: $id) {
      id
      word
    }
  }
`;

class WordItem extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    console.log("item = ", this.props.item);
  }

  private toogleOpen = () => {
    console.log("toogle open");
    this.setState(state => ({
      isOpen: !state.isOpen
    }));
  };

  public render() {
    return (
      <ListItem
        p={"10px"}
        variant={
          !isPair(this.props.index) ? "outlinePrimary" : "outlineSecondary"
        }
        onClick={this.toogleOpen}
      >
        <Flex width={1} alignItems={"center"}>
          <Text>{this.props.item.word}</Text>
          {this.state.isOpen && (
            <React.Fragment>
              <Flex width={1} ml={2} flexWrap={"wrap"}>
                <Text lineHeight={"24px"} mx={2}>
                  {this.props.item.pronunciation}
                </Text>
                <Text lineHeight={"24px"} mx={2}>
                  {this.props.item.translation}
                </Text>
                {this.props.item.association && (
                  <Text lineHeight={"24px"} mx={2}>
                    {this.props.item.association}
                  </Text>
                )}
              </Flex>

              <Mutation
                mutation={LEARNED_VOCAB_ITEM}
                update={(cache, { data }) => {
                  //cuando no son datos puros, ejemplo listas, hay que añadir manualmente los nuevos datos a la cache de graphql
                  const { vocabListByListName } = cache.readQuery({
                    query: GET_LIST_ITEMS_BY_LISTNAME_QUERY,
                    variables: {
                      listName: this.props.listName
                    }
                  });
                  vocabListByListName.VocabItems = vocabListByListName.VocabItems.filter(
                    item => item.id !== data.vocabItemLearned.id
                  );
                  cache.writeQuery({
                    query: GET_LIST_ITEMS_BY_LISTNAME_QUERY,
                    variables: {
                      listName: this.props.listName
                    },
                    data: {
                      vocabListByListName
                    }
                  });
                }}
              >
                {addVocabList => (
                  <Button
                    px={2}
                    onClick={() => {
                      addVocabList({
                        variables: {
                          id: parseInt(this.props.item.id)
                        }
                      });
                    }}
                  >
                    Aprendido
                  </Button>
                )}
              </Mutation>
            </React.Fragment>
          )}
        </Flex>
      </ListItem>
    );
  }
}

export { WordItem };
