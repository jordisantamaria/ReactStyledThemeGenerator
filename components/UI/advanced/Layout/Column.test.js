import React from 'react';
import {renderWithProviders} from '../../../../lib/testConfig/testUtils';
import Column from './Column';
import {Breakpoints, MediaQueries} from '../../../../lib/Breakpoints';

describe("Column styled", () => {
  test("If responsive size without default size, flex-basis == 100%", () => {
    const {
      container,
      queryByPlaceholderText,
      getByText,
      queryByText, debug
    } = renderWithProviders(
      <Column sm={3}>
        random column
      </Column>
    );

    debug(container)

    expect(getByText('random column')).toHaveStyleRule(
    'flex-basis',
    '100%'
    );
  });

  test("Flex Grow = size", () => {
    const {
      container,
      queryByPlaceholderText,
      getByText,
      queryByText, debug
    } = renderWithProviders(
    <Column size={3}>
      random column
    </Column>
    );

    debug(container)

    expect(getByText('random column')).toHaveStyleRule(
    'flex-grow',
    '3'
    );
  });

  test("Flex Grow = sm/md/lg & flex-basis = 0 on responsive", () => {
    const {
      container,
      queryByPlaceholderText,
      getByText,
      queryByText, debug
    } = renderWithProviders(
    <Column sm={3}>
      random column
    </Column>
    );

    debug(container)

    expect(getByText('random column')).toHaveStyleRule(
    'flex-grow',
    '3', {
      media: `(min-width: ${Breakpoints.tablet})`,
    }
    );

    expect(getByText('random column')).toHaveStyleRule(
    'flex-basis',
    '0', {
      media: `(min-width: ${Breakpoints.tablet})`,
    }
    );

  });
});
