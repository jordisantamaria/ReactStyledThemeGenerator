import App, { Container } from "next/app";
import React from "react";
import { ModalProvider } from "styled-react-modal";
import withApolloClient from "../lib/apollo/with-apollo-client";
import { ApolloProvider } from "react-apollo";
import BaseLayout from "../components/BaseLayout";
import { Provider } from "react-redux";
import withReduxStore from "../lib/redux/with-redux-store";
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; margin: 0; }
  body {
    margin: 0;
    background-color: #F8F7FF;
    color: #3e3e3e;
    font-family: 'Roboto Slab', serif;
  }
  
  @font-face {
    font-family: 'fontello';
    src: url('/static/font/fontello.eot?34031553');
    src: url('/static/font/fontello.eot?34031553#iefix') format('embedded-opentype'),
         url('/static/font/fontello.woff2?34031553') format('woff2'),
         url('/static/font/fontello.woff?34031553') format('woff'),
         url('/static/font/fontello.ttf?34031553') format('truetype'),
         url('/static/font/fontello.svg?34031553#fontello') format('svg');
    font-weight: normal;
    font-style: normal;
}
 
 [class^="icon-"]:before, [class*=" icon-"]:before {
  font-family: "fontello";
  font-style: normal;
  font-weight: normal;
  speak: none;
 
  display: inline-block;
  text-decoration: inherit;
  width: 1em;
  margin-right: .2em;
  text-align: center;
  /* opacity: .8; */
 
  /* For safety - reset parent styles, that can break glyph codes*/
  font-variant: normal;
  text-transform: none;
 
  /* fix buttons height, for twitter bootstrap */
  line-height: 1em;
 
  /* Animation center compensation - margins should be symmetric */
  /* remove if not needed */
  margin-left: .2em;
 
  /* you can be more comfortable with increased icons size */
  /* font-size: 120%; */
 
  /* Font smoothing. That was taken from TWBS */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
  /* Uncomment for 3D effect */
  /* text-shadow: 1px 1px 1px rgba(127, 127, 127, 0.3); */
}
 
.icon-plus-circle:before { content: 'file:/C:/Users/Jordi/Documents/nextjs/learnJapanese/static/font/fontello.ttf\\e800'; } /* '' */
.icon-pencil:before { content: '\\e801'; } /* '' */
.icon-plus-circled:before { content: '\\e802'; } /* '' */
.icon-trash-empty:before { content: '\\e803'; } /* '' */
.icon-cancel:before { content: '\\e804'; } /* '' */
`;
class MyApp extends App {
  componentDidCatch(error, errorInfo) {
    console.log("componentDidCatch error = ", error);
    super.componentDidCatch(error, errorInfo);
  }

  render() {
    const { Component, pageProps, reduxStore, apolloClient } = this.props;
    console.log("initial state = ", reduxStore.getState());
    return (
      <Container>
        <Provider store={reduxStore}>
          <ApolloProvider client={apolloClient}>
            <>
              <GlobalStyle />
            <ModalProvider>
              <BaseLayout
                title={"Styled Theme"}
                description={
                  "Generador de tema de estilos para styled components"
                }
              >
                <Component {...pageProps} />
              </BaseLayout>
            </ModalProvider>
              </>
          </ApolloProvider>
        </Provider>
      </Container>
    );
  }
}

export default withReduxStore(withApolloClient(MyApp));
