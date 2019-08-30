import * as React from 'react';
import Flex from './basic/Flex';
import Sticky from './advanced/Sticky';
import NavbarLink from './NavbarLink';
import {Button} from './basic';
import {useMutation} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';
import {withRouter} from 'next/router';
import {connect} from 'react-redux';
import {IState} from '../../lib/redux/rootReducer';
import {ITheme} from '../../lib/redux/ThemeActions';

/*export const SAVE_THEME_MUTATION = gql`
  mutation saveTheme(
    $theme: NewTheme
  ) {
    saveTheme(theme: $theme) {
      name
      fontSizes
      space
      breakpoints
    }
  }
`;*/

export const SAVE_THEME_MUTATION = gql`
  mutation saveTheme(
    $name: String
    $fontSizes: [Int]
    $space: [Int]
    $breakpoints: [String]
  ) {
    saveTheme(name: $name, fontSizes: $fontSizes, space: $space, breakpoints: $breakpoints) {
      name
      fontSizes
      space
      breakpoints
    }
  }
`;

interface IProps {
  login: () => void;
  logout: () => void;
  isAuthenticated: boolean;
  theme: ITheme;
}
const Nav = ({ login, logout, isAuthenticated, theme }: IProps) => {

  const [saveTheme] = useMutation(SAVE_THEME_MUTATION);

  const handleSaveClick = () => {
    /*const savedTheme = {
      name: 'Default theme',
      fontSizes: theme.fontSizes,
      space: theme.space,
      breakpoints: theme.breakpoints
    }*/
    saveTheme({
      variables: {
        name: theme.name,
        fontSizes: theme.fontSizes,
        space: theme.space,
        breakpoints: theme.breakpoints
      }
    });
  }
  return (
    <Sticky bg={'white'} css={{top: 0}}>
      <Flex m={"auto"} justifyContent={"flex-end"} alignItems={'center'}
          css={{boxShadow: '0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12)'}}
            px={3} py={10}
      >
          <NavbarLink px={10} href={"/Admin"}>
            <Button variant={'primary'}>
              Descargar
            </Button>
          </NavbarLink>
          <Button variant={'primary'} onClick={handleSaveClick}>
            Guardar
          </Button>
          {isAuthenticated && (
            <NavbarLink px={10} href={"/myThemes"}>
              <Button variant={'primary'}>
                Mis temas
              </Button>
            </NavbarLink>
          )  }
          {isAuthenticated === true ? (
            <NavbarLink px={10} onClick={logout}>
              Cierra sesión
            </NavbarLink>
          ) : (
            <NavbarLink px={10} onClick={login}>
              <Button variant={'primary'}>
                Inicia sesión
              </Button>
            </NavbarLink>
          )}
      </Flex>
    </Sticky>
  );
};

const mapStateToProps = (state: IState, ownProps) => {
  return {
    ...ownProps,
    theme: state.theme
  };
};

export default connect(
mapStateToProps
)(withRouter(Nav));
