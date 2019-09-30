import React from 'react';
import {render} from 'react-testing-library';
import {ThemeProvider} from 'styled-components';
import theme from '../theme';

function renderWithProviders(ui, ...rest) {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>, ...rest);
}
//al exportar la llibreria de react-testing, permet fer servir totes les seves utilitats als nostres tests sense importarla de nou.
export * from 'react-testing-library';
// override the built-in render with our own
export {renderWithProviders};
