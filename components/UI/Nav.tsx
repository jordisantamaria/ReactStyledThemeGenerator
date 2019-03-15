import * as React from "react";
import Flex from "./basic/Flex";
import Box from "./basic/Box";
import Link from "next/link";
import Text from "./basic/Text";

const Nav = ({ login, logout, isAuthenticated }) => {
  console.log("Nav is authenticated = ", isAuthenticated);
  return (
    <Box bg={"primary"} color={"white"}>
      <Flex
        css={{ maxWidth: "1000px" }}
        m={"auto"}
        justifyContent={"space-between"}
      >
        <Box p={3}>
          <Link href={"/"}>
            <Text css={{ cursor: "pointer" }}>Aprende Japones</Text>
          </Link>
        </Box>
        {isAuthenticated === true ? (
          <Box p={3} onClick={logout}>
            Cierra sesión
          </Box>
        ) : (
          <Box p={3} onClick={login}>
            Inicia sesión
          </Box>
        )}
      </Flex>
    </Box>
  );
};

export default Nav;
