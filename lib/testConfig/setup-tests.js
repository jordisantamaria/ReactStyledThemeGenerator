// react-testing-library renders your components to document.body,
// this will ensure they're removed after each test.
import 'react-testing-library/cleanup-after-each';

//per a que el snapshot no dongui una clase autogenerada
import 'jest-styled-components';

//per a tenir utilitats extres per testar tipus toHaveStyleRule
import 'jest-dom/extend-expect';

import 'jest-axe/extend-expect';
