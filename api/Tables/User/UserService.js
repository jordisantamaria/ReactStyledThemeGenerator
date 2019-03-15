const jwt = require("jsonwebtoken");

export const getUser = token => {
  return jwt.verify(token, config.secret, function(error, decoded) {
    if (!error) {
      return {
        decoded
      };
    } else {
      return error;
    }
  });
};
