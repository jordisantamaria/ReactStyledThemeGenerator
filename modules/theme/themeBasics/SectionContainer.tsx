import * as React from 'react';
import {Box} from '../../../components/UI/basic';

const SectionContainer = (props) => {
  return (
  <Box bg={'primaryLight'} p={2} my={20}>
    {props.children}
  </Box>
  );
};

export default SectionContainer;
