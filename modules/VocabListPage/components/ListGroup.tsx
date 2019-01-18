import * as React from "react";
import Flex from "../../../components/UI/basic/Flex";
import Text from "../../../components/UI/basic/Text";
import Heading from "../../../components/UI/basic/Heading";
import Link from "next/link";
import Box from "../../../components/UI/basic/Box";
import Icon from "../../../components/UI/basic/Icon";
import Card from "../../../components/UI/basic/Card";
import { IVocabList } from "../reducer";

interface IProps {
  listName: string;
  lists: IVocabList[];
}
const ListGroup = (props: IProps) => {
  console.log("customLists = ", props.lists);
  return (
    <Box>
      <Heading fontSize={3}>{props.listName}</Heading>
      {props.lists &&
        props.lists.map(({ listName }) => (
          <Card my={2} alignItems={"center"} justifyContent={"space-between"}>
            <Link
              as={`/list/${listName}`}
              href={`/myList?listName=${listName}`}
            >
              <Text mr={2} css={{ cursor: "pointer" }} color={"white"}>
                {listName}
              </Text>
            </Link>
            <Flex bg={"white"} css={{ borderRadius: "4px" }}>
              <Icon className="icon-plus-circled" color={"secondary"} />
              <Icon className="icon-pencil" color={"secondary"} />
              <Icon className="icon-trash-empty" color={"secondary"} />
            </Flex>
          </Card>
        ))}
    </Box>
  );
};

export default ListGroup;
