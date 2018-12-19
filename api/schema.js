const { makeExecutableSchema } = require('graphql-tools')

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
    vocabList(listName: String): VocabList
    vocabItem(id: Int): VocabItem
  }
`

const resolvers = {
  Query: {
    vocabLists: () => {
      return [{
        id: 1,
        listName: 'Mi primera lista',
        vocabItemList: []
      }]
    },
    vocabItem: (id) => {
      return {
        id,
        word: 'Hello',
        translation: 'Hola'
      }
    }
  }
}

const schema = makeExecutableSchema({ typeDefs, resolvers })

module.exports = schema
