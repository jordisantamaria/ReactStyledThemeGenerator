require("dotenv").config();

/*
module.exports = {
  username: process.env.DB_USER,
  password: process.env.PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOSTNAME,
  dialect: process.env.DB_TYPE,
  use_env_variable: process.env.DATABASE_URL,
};
*/

module.exports = {
  username: "postgres",
  password: "1nf0rm4t1c4",
  database: "postgres",
  host: "localhost",
  dialect: "postgres",
  use_env_variable: process.env.DATABASE_URL
};

/*module.exports = {
  username: "root",
  password: "1nf0rm4t1c4",
  database: "learn_japanese",
  host: "localhost",
  dialect: "mysql",
  use_env_variable: process.env.DATABASE_URL
};*/

//puerto postgress 5433
