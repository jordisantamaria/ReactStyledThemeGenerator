Prettier:

yarn pretty-quick

Sequelize based on template:
https://github.com/sequelize/express-example

**Technologies used:**

Nextjs: SSR
React: SPA
Graphql: A better way to performance Api Rest, receiving only the data you need.
AUTH0: To security autenticate users.
Redux: To share the theme information to all the application.
Lodash: Array & Objects utilities.
Typescript: To generate iterfaces for props, being able to detect errors fasters and get better help from IDE.
Babel: Transpile javascript to vanilla javascript, so the production hosting can read it.
jest: For test code.

**How to upload to production with heroku:**

brew install heroku/brew/heroku
heroku login
heroku create ProjectName
Create a procfile file with the command to execute the project
git push heroku master
heroku open

**To execute web on development:**

npm install
npm start
