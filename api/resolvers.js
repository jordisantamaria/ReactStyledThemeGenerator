const { VocabList, VocabItem } = require("./models");

const resolvers = {
  Query: {
    vocabLists: () =>
      VocabList.findAll().then(function(vocabLists) {
        return vocabLists;
      }),
    //Todo: devolver el item de la bd
    vocabItem: id => {
      return {
        id,
        word: "Hello",
        translation: "Hola"
      };
    },
    vocabList: (rootValue, args) =>
      VocabList.findById(args.id, { include: [{ model: VocabItem }] }),
    vocabListByListName: (rootValue, args) => {
      return VocabList.findOne({
        where: {
          listName: args.listName
        },
        include: [{ model: VocabItem }]
      }).then(function(vocabList) {
        return vocabList;
      });
    }
  },
  Mutation: {
    vocabListAdd: (_, args) => {
      return VocabList.create({
        listName: args.vocabList.listName
      }).then(function(vocabList1) {
        if (args.vocabList.VocabItems) {
          // creamos los items y los linkamos a la lista
          VocabItem.bulkCreate(args.vocabList.VocabItems).then(function(
            vocabItems
          ) {
            vocabList1.addVocabItems(vocabItems);
          });
        }
        return vocabList1;
      });
    }
  }
};

module.exports = resolvers;
