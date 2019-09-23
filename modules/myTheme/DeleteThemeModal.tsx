import BaseModal, {IModal} from '../../components/UI/modals/BaseModal';
import TextStyled from '../../components/UI/basic/Text';
import {Box, Button, Flex} from '../../components/UI/basic';
import {gql} from 'apollo-boost';
import {useMutation} from '@apollo/react-hooks';

interface IProps extends IModal {
  name: string;
  id: string;
}

export const DELETE_THEME_MUTATION = gql`
  mutation deleteTheme(
    $id: ID
  ) {
    deleteTheme(id: $id) {
      name
      fontSizes
      space
      breakpoints
    }
  }
`;

const DeleteThemeModal = (props: IProps) => {
  const [deleteTheme] = useMutation(DELETE_THEME_MUTATION);

  const onSuccess = () => {
    deleteTheme({variables: {id: props.id}});
    console.log('ON REMOVE THEME');
    props.toggleModal();
  };

  return (
  <BaseModal
  mt={'-75px'}
  isOpen={props.isOpen}
  toggleModal={props.toggleModal}
  titleComponent={
    <TextStyled color={'white'}>Borrar Tema</TextStyled>
  }
  headerStyles={{padding: '6px'}}
  >
    <Box p={3}>
      <TextStyled pb={4}>Estas seguro que deseas borrar el tema.</TextStyled>
      <Flex justifyContent={'flex-end'}>
        <Button onClick={props.toggleModal} variant={'danger'}>
          Cancelar
        </Button>

        <Button ml={2} variant={'success'} onClick={onSuccess}>
          Aceptar
        </Button>
      </Flex>
    </Box>
  </BaseModal>
  );
};

export default DeleteThemeModal;
