import * as React from "react";
import Flex from "../../../components/UI/basic/Flex";
import Text from "../../../components/UI/basic/Text";
import Heading from "../../../components/UI/basic/Heading";
import Link from "next/link";
import Box from "../../../components/UI/basic/Box";
import Icon from "../../../components/UI/basic/Icon";
import { IVocabList } from "../model";
import ListItem from "../../../components/UI/ListItem";
import { Colors } from "../../../lib/Colors";
import { isPair } from "../../../lib/utils";

interface IProps {
  listName: string;
  lists: IVocabList[];
}
const ListGroup = (props: IProps) => {
  console.log("customLists = ", props.lists);
  return (
    <Box>
      <Heading mb={2} fontSize={3}>
        {props.listName}
      </Heading>
      {props.lists &&
        props.lists.map(({ listName }, index) => (
          <ListItem
            p={"10px"}
            variant={!isPair(index) ? "outlinePrimary" : "outlineSecondary"}
          >
            <Link
              as={`/list/${listName}`}
              href={`/myList?listName=${listName}`}
            >
              <Text
                mr={2}
                css={{ cursor: "pointer" }}
                color={
                  !isPair(index) ? Colors.primaryText : Colors.secondaryDark
                }
              >
                {listName}
              </Text>
            </Link>
            <Flex css={{ borderRadius: "4px" }}>
              <Icon className="icon-plus-circled" color={"secondary"} />
              <Icon className="icon-pencil" color={"secondary"} />
              <Icon className="icon-trash-empty" color={"secondary"} />
            </Flex>
          </ListItem>
        ))}
    </Box>
  );
};

export default ListGroup;
