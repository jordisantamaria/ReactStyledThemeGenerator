const express = require('express')
const bodyParser = require('body-parser')
const { graphqlExpress, graphiqlExpress } = require('graphql-server-express')
const schema = require('./schema')
const models = require('./models');

const app = express()

app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress({ schema })
)

app.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql'
  })
)

const PORT = 5678

models.sequelize.sync().then(function() {
  app.listen(PORT, () => {
    console.log('Servidor corriendo OK')
  })
});

