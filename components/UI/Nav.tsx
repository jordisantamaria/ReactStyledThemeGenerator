import * as React from 'react';
import Flex from './basic/Flex';
import Sticky from './advanced/Sticky';
import NavbarLink from './NavbarLink';
import {Button} from './basic';
import {useMutation} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';
import {RouterProps, withRouter} from 'next/router';
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
  router?: RouterProps;
}
const Nav = ({ login, logout, isAuthenticated, theme, router }: IProps) => {

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
          <NavbarLink px={2} href={"/download"}>
            <Button variant={'primary'}>
              Descargar
            </Button>
          </NavbarLink>
          <Button mx={2} variant={'primary'} onClick={handleSaveClick}>
            Guardar
          </Button>
        <NavbarLink px={2} href={"/myThemes"}>
          <Button variant={router.pathname === '/myThemes' ? 'primaryLight' : 'primary'}>
            Mis temas
          </Button>
        </NavbarLink>
          {/*{isAuthenticated && (
            <NavbarLink px={10} href={"/myThemes"}>
              <Button variant={'primary'}>
                Mis temas
              </Button>
            </NavbarLink>
          )  }*/}
          {isAuthenticated === true ? (
            <NavbarLink px={2} onClick={logout}>
              <Button variant={'primary'}>
                Cerrar sesión
              </Button>
            </NavbarLink>
          ) : (
            <NavbarLink px={2} onClick={login}>
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
