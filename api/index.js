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
  resolvers
});

models.sequelize.sync(/*{force: true}*/).then(function() {
  server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
});
