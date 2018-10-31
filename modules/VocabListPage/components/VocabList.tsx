import * as React from 'react';
import Flex from '../../../components/UI/basic/Flex';
import Text from '../../../components/UI/basic/Text';
import Heading from '../../../components/UI/basic/Heading';
import Link from 'next/link';
import Box from '../../../components/UI/basic/Box';
import Button from '../../../components/UI/basic/Button';
import {connect} from 'react-redux';
import {IVocabListsState} from '../reducer';

interface Iprops {
  listName: string;
  customLists: any[];
}
const VocabList = (props: Iprops) => {
  return (
    <Box>
      <Heading fontSize={3}>{props.listName}</Heading>
      {props.customLists && props.customLists.map((name) => (
        <Flex my={2} alignItems={'center'}>
          <Link href="/myList">
            <Text mr={2} bg={'#ddd'} p={2} css={{cursor: 'pointer'}}>{name}</Text>
          </Link>
          <Button mr={1}>Añadir</Button>
          <Button mr={1}>Editar</Button>
          <Button mr={1}>Borrar</Button>
        </Flex>
      ))}
    </Box>
  );
};

const mapStateToProps = (state: IVocabListsState, ownProps) => ({
  ...ownProps,
  customLists: state.customLists,
});

export default connect(mapStateToProps)(VocabList);