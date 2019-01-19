import * as React from "react";
import { isPair } from "../../lib/utils";
import { IVocabItem } from "../VocabListPage/model";
import { Button, Flex, Text } from "../../components/UI/basic";
import ListItem from "../../components/UI/ListItem";

interface IProps {
  className?: string;
  item: IVocabItem;
  index: number;
}

interface IState {
  isOpen: boolean;
}

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
        <Flex width={1}>
          <Text>{this.props.item.word}</Text>
          {this.state.isOpen && (
            <React.Fragment>
              <Flex width={1} ml={2}>
                <Text mx={2}>{this.props.item.translation}</Text>
                <Text mx={2}>{this.props.item.pronunciation}</Text>
                {this.props.item.association && (
                  <Text mx={2}>{this.props.item.association}</Text>
                )}
              </Flex>
              <Button py={1} px={2}>
                Aprendido
              </Button>
            </React.Fragment>
          )}
        </Flex>
      </ListItem>
    );
  }
}

export { WordItem };
