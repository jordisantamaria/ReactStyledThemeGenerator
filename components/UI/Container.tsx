import * as React from 'react';
import Box from './basic/Box';

interface Iprops {
  children?: any;
}
const Container = (props: Iprops) => {
  return (
  <Box px={3}>
    {props.children}
  </Box>
  );
}

export default Container;