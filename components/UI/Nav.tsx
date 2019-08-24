import * as React from "react";
import Flex from "./basic/Flex";
import Sticky from "./advanced/Sticky";
import NavbarLink from "./NavbarLink";

const Nav = ({ login, logout, isAuthenticated }) => {
  console.log("Nav is authenticated = ", isAuthenticated);
  return (
    <Sticky bg={"primary"} color={"white"}>
      <Flex m={"auto"} justifyContent={"space-between"}>
        <NavbarLink p={3} href={"/"}>
          Aprende Japones
        </NavbarLink>

        <Flex>
          <NavbarLink p={3} href={"/Admin"}>
            Administracion
          </NavbarLink>
          <NavbarLink p={3} href={"/StudyVocabulary"}>
            Repasar vocabulario
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
