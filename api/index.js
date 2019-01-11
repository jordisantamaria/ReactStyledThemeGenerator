const express = require('express')
const bodyParser = require('body-parser')
const { graphqlExpress, graphiqlExpress } = require('graphql-server-express')
const schema = require('./schema')
const models = require('./models');
const cors = require('cors')

const app = express()

app.use(cors())

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

models.sequelize.sync({force: true})
  /*.then(function() {
    models.VocabList.create({
      listName: 'Lista de prueba'
    })
  })*/
/*  .then(function() {
    models.VocabList.findById(1).then(function(vocabList1) {
      console.log("vocabList1 = ", vocabList1);
      models.VocabItem.create({
        word: 'Wellcome',
        pronunciation: 'Wellcom',
        translation: 'Bienvienido'
      }).then(function(vocabItem) {
        vocabList1.addVocabItem(vocabItem);
      })
    });
  })*/
  .then(function() {
    app.listen(PORT, () => {
      console.log('Servidor corriendo OK')
    })
});

