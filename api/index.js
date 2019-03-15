//Este fichero solo sirve para ejecutar el api de forma independiente.

import { UserType } from "./Tables/User/types";
const express = require("express");
const bodyParser = require("body-parser");
const { graphqlExpress, graphiqlExpress } = require("graphql-server-express");
const models = require("./models");
import { DateType } from "./ScalarTypes/Date";
import { merge } from "lodash";
import { VocabItemResolver } from "./Tables/VocabItem/resolver";
import { VocabListResolver } from "./Tables/VocabList/resolver";
import { UserResolver } from "./Tables/User/resolver";

const VocabListType = require("./Tables/VocabList/types");
const VocabItemType = require("./Tables/VocabItem/types");
const { ApolloServer, gql } = require("apollo-server");

/*
Para solo permitir que nuestro front end tenga acceso a los datos del api
CORS afecta a cualquiera que quiera conectarse fuera del dominio del servidor,
es decir cualquier app k no sea del lado del servidor como seria una SPA con react

const corsOptions = { origin: "http://localhost:3000" };

app.use(cors(corsOptions));
*/

const rootQuery = gql`
  scalar Date

  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`;

const resolvers = merge(
  DateType,
  VocabItemResolver,
  VocabListResolver,
  UserResolver
);

const server = new ApolloServer({
  typeDefs: [rootQuery, VocabListType, VocabItemType, UserType],
  resolvers,
  context: async ({ req }) => {
    let authToken = null;
    let currentUser = null;
    console.log("context");
    try {
      authToken = req.headers["authorization"];

      if (authToken) {
        currentUser = { user: "userTest" };
      }
    } catch (e) {
      console.warn(`Unable to authenticate using auth token: ${authToken}`);
    }

    return {
      authToken,
      currentUser
    };
  }
});

models.sequelize
  .sync(/*{force: true}*/)
  .then(function() {
    server
      .listen()
      .then(({ url }) => {
        console.log(`🚀 Server ready at ${url}`);
      })
      .catch(e => console.log("Apollo error = ", e));
  })
  .catch(e => console.log("Sequelize error = ", e));
