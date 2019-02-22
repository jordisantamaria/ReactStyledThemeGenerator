import { DateType } from "./ScalarTypes/Date";

const { makeExecutableSchema } = require("graphql-tools");
const VocabListType = require("./Tables/VocabList/types");
const VocabItemType = require("./Tables/VocabItem/types");
import { merge } from "lodash";
import { VocabItemResolver } from "./Tables/VocabItem/resolver";
import { VocabListResolver } from "./Tables/VocabList/resolver";

const rootQuery = `

  scalar Date
  
  type Query {
    _empty: String
  }
  
  type Mutation {
    _empty: String
  }
`;

const resolvers = merge(DateType, VocabItemResolver, VocabListResolver);
console.log("resolvers = ", resolvers);

const index = makeExecutableSchema({
  typeDefs: [rootQuery, VocabListType, VocabItemType],
  resolvers
});

module.exports = index;
