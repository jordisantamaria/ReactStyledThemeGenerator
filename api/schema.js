const { makeExecutableSchema } = require('graphql-tools')
const {VocabList, VocabItem} = require('./models');

const typeDefs = `
  type VocabList {
    id: ID!
    listName: String!
    vocabItemList: [VocabItem]
  }
  
  type VocabItem {
    id: ID!
    word: String!
    translation: String!
    pronunciation: String
    association: String
  }

  type Query {
    vocabLists: [VocabList]
    vocabList(id: Int): VocabList
    vocabItem(id: Int): VocabItem
  }
`

const resolvers = {
  Query: {
    vocabLists: () => VocabList.findAll().then(function(vocabLists) {
        return vocabLists;
      }),
    vocabItem: (id) => {
      return {
        id,
        word: 'Hello',
        translation: 'Hola'
      }
    },
    vocabList: (rootValue, args) => VocabList.findById(args.id)
  }
}

const schema = makeExecutableSchema({ typeDefs, resolvers })

module.exports = schema
