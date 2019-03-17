require("dotenv").config();
import { merge } from "lodash";
import { DateType } from "./api/ScalarTypes/Date";
import { VocabItemResolver } from "./api/Tables/VocabItem/resolver";
import { VocabListResolver } from "./api/Tables/VocabList/resolver";
import { UserResolver } from "./api/Tables/User/resolver";
import { UserType } from "./api/Tables/User/types";
import { gql } from "apollo-server";
import * as cors from "cors";
import * as models from "./api/models";
import { getUser } from "./api/Tables/User/UserService";
const { ApolloServer } = require("apollo-server-express");
const VocabListType = require("./api/Tables/VocabList/types");
const VocabItemType = require("./api/Tables/VocabItem/types");
const jwksClient = require("jwks-rsa");
const jwt = require("jsonwebtoken");

const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const serverNext = next({ dev });
const handle = serverNext.getRequestHandler();

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

const client = jwksClient({
  jwksUri: "https://learn-japanese.eu.auth0.com/.well-known/jwks.json"
});

function getKey(header, cb) {
  client.getSigningKey(header.kid, function(err, key) {
    var signingKey = key.publicKey || key.rsaPublicKey;
    cb(null, signingKey);
  });
}

//TODO Mirar de conseguir que funcioni amb el audience tambe
const options = {
  issuer: "https://learn-japanese.eu.auth0.com/",
  algorithms: ["RS256"]
};

const apolloServer = new ApolloServer({
  typeDefs: [rootQuery, VocabListType, VocabItemType, UserType],
  resolvers,
  context: async ({ req }) => {
    let authToken = null;
    let user = null;
    try {
      authToken = req.headers["authorization"];
      console.log("context auth token = ", authToken);

      user = new Promise((resolve, reject) => {
        jwt.verify(authToken, getKey, options, (err, decoded) => {
          console.log("decoded = ", decoded);
          if (err) {
            console.log("Error verifying token ", err);
            return reject(err);
          }
          resolve(decoded.email);
        });
      });
    } catch (e) {
      console.warn(`Unable to authenticate using auth token: ${authToken}`);
    }

    return {
      user
    };
  }
});

let port = process.env.PORT;
if (port == null || port === "") {
  port = 3000;
}
serverNext
  .prepare()
  .then(() => {
    const app = express();
    //app.use(cors)

    app.get("/list/:listName", (req, res) => {
      const actualPage = "/myList";
      const queryParams = { listName: req.params.listName };
      console.log("Get list ", queryParams);
      serverNext.render(req, res, actualPage, queryParams);
    });

    //limitar * per a que no inclogui /api
    app.get(/^(?!(?:\/api)$).*$/, (req, res) => {
      return handle(req, res);
    });

    apolloServer.applyMiddleware({ app, path: "/api" });

    models.sequelize
      .sync(/*{force: true}*/)
      .then(function() {
        app.listen(port, err => {
          if (err) throw err;
          console.log("> Ready on http://localhost:3000");
        });
      })
      .catch(e => {
        console.log("Error al construir sequelize: ", e);
      });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
