/*import {
  hashSync as hash,
  compareSync as comparePasswords
} from 'bcryptjs'*/
const jwt = require("jsonwebtoken");
const { User } = require("../../models");
const config = require("../../config/config");

const createToken = username => jwt.sign({ username }, config.secret);

export const UserResolver = {
  Query: {
    signInWithToken: (_, { token }) => {
      return jwt.verify(token, config.secret, function(error, decoded) {
        if (!error) {
          return {
            username: decoded.username
          };
        } else {
          return error;
        }
      });
    },
    signIn: (_, { email, password }) => {
      return User.findOne({
        where: {
          email
        }
      }).then(({ id, username, email }) => {
        const token = createToken(username);
        return {
          id,
          username,
          email,
          token
        };
      });
    }
  },
  Mutation: {
    signUp: (rootValue, { user }) => {
      console.log("User on signUp = ", user);
      return User.create({
        username: user.username,
        email: user.email,
        password: user.password
      }).then(user => {
        console.log("user created = ", user);
        const token = createToken(user.username);
        return {
          id: user.id,
          username: user.username,
          email: user.email,
          token
        };
      });
    }
  }
};
