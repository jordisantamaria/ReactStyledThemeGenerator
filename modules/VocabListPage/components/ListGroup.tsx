import * as React from 'react';
import Flex from '../../../components/UI/basic/Flex';
import Text from '../../../components/UI/basic/Text';
import Heading from '../../../components/UI/basic/Heading';
import Link from 'next/link';
import Box from '../../../components/UI/basic/Box';
import Icon from '../../../components/UI/basic/Icon';
import Card from '../../../components/UI/basic/Card';

interface IProps {
  listName: string;
  list: any[];
}
const ListGroup = (props: IProps) => {
  console.log('customLists = ', props.list);
  return (
    <Box>
      <Heading fontSize={3}>{props.listName}</Heading>
      {props.list && props.list.map((name) => (
        <Card my={2} alignItems={'center'} justifyContent={'space-between'}>
          <Link href="/myList">
            <Text mr={2} css={{cursor: 'pointer'}} color={'white'}>{name}</Text>
          </Link>
          <Flex bg={'white'} css={{borderRadius: '4px'}}>
            <Icon className="icon-plus-circled" color={'secondary'} />
            <Icon className="icon-pencil" color={'secondary'} />
            <Icon className="icon-trash-empty" color={'secondary'} />
          </Flex>
        </Card>
      ))}
    </Box>
  );
};

export default ListGroup;