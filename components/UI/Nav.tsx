import * as React from "react";
import Flex from "./basic/Flex";
import Box from "./basic/Box";
import Link from "next/link";
import Text from "./basic/Text";
import Sticky from "./advanced/Sticky";
import NavbarLink from "./NavbarLink";

const Nav = ({ login, logout, isAuthenticated }) => {
  console.log("Nav is authenticated = ", isAuthenticated);
  return (
    <Sticky bg={"primary"} color={"white"}>
      <Flex
        css={{ maxWidth: "1000px" }}
        m={"auto"}
        justifyContent={"space-between"}
      >
        <NavbarLink p={3}>
          <Link href={"/"}>
            <Text>Proyecto base</Text>
          </Link>
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
    </Sticky>
  );
};

export default Nav;
