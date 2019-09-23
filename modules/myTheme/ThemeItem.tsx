import * as React from 'react';
import {ITheme} from '../../lib/redux/ThemeActions';
import {Box, Flex, Icon} from '../../components/UI/basic';
import {useState} from 'react';
import TextStyled from '../../components/UI/basic/Text';
import ThemeNameForm from './ThemeNameForm';
import OpenModalButton from '../../components/UI/modals/OpenModalButton';
import DeleteThemeModal from './DeleteThemeModal';

interface IProps {
  theme: ITheme;
}

const ThemeItem = (props: IProps) => {

  const [editable, setEditable] = useState(false);

  const handleEditButton = () => {
    setEditable(!editable);
  }

  const onEditThemeName = (value) => {
    setEditable(false);
    console.log('value = ', value);
  }

  return (
  <Box width={200} border={`1px solid ${props.theme.colors['primary']}`} m={3}>
    <Flex bg={props.theme.colors['primary']} css={{height: '100px', cursor: 'pointer'}} justifyContent={'center'} alignItems={'center'} color={'white'}>
      {editable ?
        <ThemeNameForm name={props.theme.name} onSubmit={onEditThemeName}/>
      :
        <TextStyled>{props.theme.name}</TextStyled>
      }

    </Flex>
    <Flex justifyContent={'space-between'} p={2} >
      <Flex width={1/2}
            borderRight={`1px solid ${props.theme.colors['primary']}`}
            css={{cursor: 'pointer'}}
            onClick={handleEditButton}
            color={editable ? 'success' : ''}
      >
        Editar
        <Icon
        className="icon-pencil"
        color={'secondary'}
        css={{cursor: 'pointer'}}
        ml={1}
        />
      </Flex>
      <OpenModalButton modal={<DeleteThemeModal name={props.theme.name} id={props.theme.id}/>}>
        <Flex width={1/2} justifyContent={'flex-end'} css={{cursor: 'pointer'}}>
          Borrar
          <Icon
          css={{cursor: 'pointer'}}
          className="icon-trash-empty"
          color={'secondary'}
          ml={1}
          />
        </Flex>
      </OpenModalButton>
    </Flex>
  </Box>
  );
};

export default ThemeItem;
