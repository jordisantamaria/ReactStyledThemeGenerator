const { makeExecutableSchema } = require('graphql-tools')
const {VocabList, VocabItem} = require('./models');

const typeDefs = `
  type VocabList {
    id: ID!
    listName: String!
    vocabItemList: [VocabItem]
  }
  
  input NewVocabList {
    listName: String!
  }
  
  type VocabItem {
    id: ID!
    word: String!
    translation: String!
    pronunciation: String
    association: String
  }
  
  input NewVocabItem {
    word: String
    translation: String
    pronunciation: String
    association: String
  }

  type Query {
    vocabLists: [VocabList]
    vocabList(id: Int): VocabList
    vocabItem(id: Int): VocabItem
  }
  
  type Mutation {
    vocabListAdd(vocabList: NewVocabList): VocabList
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
  },
  Mutation: {
    vocabListAdd: (_, args) => {
      console.log("Add vocab list mutation, listName = ", args.vocabList.listName);
      return VocabList.create({
        listName: args.vocabList.listName
      })
        /*.then(function(vocabList1) {
        VocabItem.create(args.vocabList.vocabItemList)
          .then(function(vocabItem) {
          vocabList1.addVocabItem(vocabItem);
        })
      })*/
    }
  }
}

const schema = makeExecutableSchema({ typeDefs, resolvers })

module.exports = schema
