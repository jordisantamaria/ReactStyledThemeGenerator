import * as React from 'react';
import Flex from './basic/Flex';
import Box from './basic/Box';
import Link from 'next/link'
import Text from './basic/Text';

const Nav = () => {
  return (
  <Flex
    bg={'yellow'}
    justifyContent={'space-between'}
  >
    <Box
      p={3}
    >
      <Link href={'/'}>
        <Text css={{cursor: 'pointer'}}>
          Aprende Japones
        </Text>
      </Link>
    </Box>
    <Box
      p={3}
    >
      Inicia sesión
    </Box>
  </Flex>
  );
}

export default Nav;