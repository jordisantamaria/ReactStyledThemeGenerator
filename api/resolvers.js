const {VocabList, VocabItem} = require('./models');

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
      console.log("Add vocab list mutation, vocab items list  = ", args.vocabList.vocabItemsList);
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

module.exports = resolvers;