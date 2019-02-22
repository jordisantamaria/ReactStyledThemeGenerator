const { VocabList, VocabItem } = require("../../models");

export const VocabListResolver = {
  Query: {
    vocabLists: () =>
      VocabList.findAll().then(function(vocabLists) {
        return vocabLists;
      }),
    vocabList: (rootValue, args) =>
      VocabList.findById(args.id, {
        include: [
          {
            model: VocabItem
          }
        ]
      }),
    vocabListByListName: (rootValue, args) => {
      return VocabList.findOne({
        where: {
          listName: args.listName
        },
        include: [
          {
            model: VocabItem,
            where: {
              toReviewDate: null
            }
          }
        ]
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
          //el validator no treu els items empty, aixi que ho fem manualment
          const vocabNoEmpty = args.vocabList.VocabItems.filter(
            item => item.word.length > 0 && item.translation.length > 0
          );

          // creamos los items y los linkamos a la lista
          VocabItem.bulkCreate(vocabNoEmpty).then(function(vocabItems) {
            vocabList1.addVocabItems(vocabItems);
          });
        }
        return vocabList1;
      });
    }
  }
};
