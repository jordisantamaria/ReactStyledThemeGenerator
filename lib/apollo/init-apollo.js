import { ApolloClient, InMemoryCache } from "apollo-boost";
import fetch from "isomorphic-unfetch";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import auth from "../Auth/AuthService";

let apolloClient = null;

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch;
}

const httpLink = createHttpLink({
  uri: "http://localhost:3000/api", // Server URL (must be absolute)
  credentials: "same-origin" // Additional fetch() options like `credentials` or `headers`
});
//com avisar a graphql k s-ha fet logout per actualitzar querys de catche
const authLink = setContext(async (_, { headers }) => {
  // get the authentication token from local storage if it exists
  const idToken = await auth.init();
  console.log("getId token en authLink = ", idToken);
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: idToken ? idToken : ""
    }
  };
});

function create(initialState) {
  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    link: authLink.concat(httpLink),
    cache: new InMemoryCache().restore(initialState || {})
  });
}

export default function initApollo(initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
}
