import * as React from 'react';
import {Box} from '../../../components/UI/basic';
import {Colors} from '../../../lib/Colors';

const SectionContainer = (props) => {
  return (
  <Box bg={Colors.primaryLight} p={2} my={20}>
    {props.children}
  </Box>
  );
};

export default SectionContainer;
