const { gql } = require("apollo-server");

export const UserType = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    token: String!
  }

  input NewUser {
    username: String!
    email: String!
    password: String!
  }

  type TokenVeryfied {
    username: String
    error: String
  }

  extend type Query {
    signIn(email: String!, password: String!): User
    signInWithToken(token: String!): TokenVeryfied
  }

  extend type Mutation {
    signUp(user: NewUser): User
  }
`;
