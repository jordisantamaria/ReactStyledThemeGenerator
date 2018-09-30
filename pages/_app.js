import App, {Container} from 'next/app'
import React from 'react'
import withReduxStore from '../lib/store/with-redux-store'
import { Provider } from 'react-redux'
import {injectGlobal, ThemeProvider} from 'styled-components';
import theme from '../lib/theme';

injectGlobal`
  * { box-sizing: border-box; margin: 0; }
  body { margin: 0;}
`
class MyApp extends App {
  render () {
    const {Component, pageProps, reduxStore} = this.props
    return (
    <Container>
      <Provider store={reduxStore}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </Container>
    )
  }
}

export default withReduxStore(MyApp)