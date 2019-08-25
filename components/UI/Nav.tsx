import * as React from "react";
import Flex from "./basic/Flex";
import Sticky from "./advanced/Sticky";
import NavbarLink from "./NavbarLink";
import {Button} from './basic';
import {Colors} from '../../lib/Colors';

const Nav = ({ login, logout, isAuthenticated }) => {
  return (
    <Sticky bg={'white'} css={{top: 0}}>
      <Flex m={"auto"} justifyContent={"flex-end"} alignItems={'center'}
          css={{boxShadow: '0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12)'}}
            px={3} py={10}
      >
          <NavbarLink px={10} href={"/Admin"} color={Colors.primaryDark} css={{fontWeight: 'bold'}}>
            <Button variant={'primary'}>
              Descargar
            </Button>
          </NavbarLink>
          <NavbarLink px={10} href={"/StudyVocabulary"} color={Colors.primaryDark} css={{fontWeight: 'bold'}}>
            <Button variant={'primary'}>
              Guardar
            </Button>
          </NavbarLink>
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

export default Nav;
