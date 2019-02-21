import { GraphQLScalarType } from "graphql";
import { Kind } from "graphql/language";
import dayjs from "dayjs";

const { VocabList, VocabItem, Sequelize } = require("./models");
const Op = Sequelize.Op;

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
    vocabItemsReview: (rootValue, args) =>
      VocabItem.findAll({
        where: {
          toReviewDate: {
            [Op.lte]: dayjs().format("MM-DD-YYYY")
          }
        },
        include: [
          {
            model: VocabList
          }
        ]
      }).then(function(VocabItems) {
        console.log("vocab review = ", {
          listName: "Lista de repaso",
          VocabItems
        });
        if (VocabItems.length === 0) {
          return null;
        }
        return { listName: "Lista de repaso", VocabItems };
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
    },
    vocabItemLearned: (_, args) => {
      const date = dayjs();
      const toReviewDate = date.add(1, "day").format("MM-DD-YYYY");
      console.log("toReviewDate = ", toReviewDate);
      return VocabItem.findById(args.id).then(item =>
        item.update({ toReviewDate })
      );
    }
  },
  Date: new GraphQLScalarType({
    name: "Date",
    description: "Custom description for the date scalar",
    parseValue(value) {
      return dayjs(value); // value from the client
    },
    serialize(value) {
      return dayjs(value).format("MM-DD-YYYY"); // value sent to the client
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.STRING) {
        return dayjs(ast.value); // ast value is always in string format
      }
      return null;
    }
  })
};

module.exports = resolvers;
