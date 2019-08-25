import * as React from "react";
import Flex from "./basic/Flex";
import Sticky from "./advanced/Sticky";
import NavbarLink from "./NavbarLink";
import { Colors } from "../../lib/Colors";

const Nav = ({ login, logout, isAuthenticated }) => {
  return (
    <Sticky bg={Colors.primary} color={"white"}>
      <Flex m={"auto"} justifyContent={"space-between"}>
        <NavbarLink p={3} href={"/"}>
          Styled Theme
        </NavbarLink>

        <Flex>
          <NavbarLink p={3} href={"/Admin"}>
            Administracion
          </NavbarLink>
          <NavbarLink p={3} href={"/StudyVocabulary"}>
            Descargar Tema
          </NavbarLink>
          {isAuthenticated === true ? (
            <NavbarLink p={3} onClick={logout}>
              Cierra sesión
            </NavbarLink>
          ) : (
            <NavbarLink p={3} onClick={login}>
              Inicia sesión
            </NavbarLink>
          )}
        </Flex>
      </Flex>
    </Sticky>
  );
};

export default Nav;
