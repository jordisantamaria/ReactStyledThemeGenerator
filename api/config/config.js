/*module.exports = {
  username: process.env.USERNAME || "root",
  password: process.env.PASSWORD || "1nf0rm4t1c4",
  database: process.env.DB_NAME || "learn_japanese",
  host: process.env.DB_HOSTNAME || "localhost",
  dialect: "mysql",
  use_env_variable: "DATABASE_URL",
  secret: "mySecretTokenKey"
};*/
//dialect = mysql postgres

module.exports = {
  username: "root",
  password: "1nf0rm4t1c4",
  database: "learn_japanese",
  host: "localhost",
  dialect: "mysql",
  use_env_variable: "DATABASE_URL",
  secret: "mySecretTokenKey"
};
