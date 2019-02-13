import * as React from "react";
import { isPair } from "../../lib/utils";
import { IVocabItem } from "../VocabListPage/model";
import { Flex, Text } from "../../components/UI/basic";
import ListItem from "../../components/UI/ListItem";

interface IProps {
  className?: string;
  item: IVocabItem;
  index: number;
  reviewed: (item: IVocabItem) => void;
}

interface IState {
  isOpen: boolean;
  isAlreadyReviewed: boolean;
}

class WordItemReview extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isAlreadyReviewed: false
    };
    console.log("item = ", this.props.item);
  }

  private toogleOpen = () => {
    console.log("toogle open");
    if (!this.state.isAlreadyReviewed) {
      this.props.reviewed(this.props.item);
      this.setState(state => ({
        isOpen: !state.isOpen,
        isAlreadyReviewed: true
      }));
    } else {
      this.setState(state => ({
        isOpen: !state.isOpen
      }));
    }
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
            </React.Fragment>
          )}
        </Flex>
      </ListItem>
    );
  }
}

export { WordItemReview };
