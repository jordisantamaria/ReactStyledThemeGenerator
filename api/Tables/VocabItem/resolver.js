import dayjs from "dayjs";
const { VocabList, VocabItem, Sequelize } = require("../../models");
const Op = Sequelize.Op;

const updateReviewDate = delay => {
  const date = dayjs();
  return date.add(delay, "day").format("MM-DD-YYYY");
};

const resetReviewDate = () => {
  const date = dayjs(); //parse
  return date.add(1, "day").format("MM-DD-YYYY");
};

export const VocabItemResolver = {
  Query: {
    //Todo: devolver el item de la bd
    vocabItem: id => {
      return VocabList.findById(args.id);
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
      })
  },
  Mutation: {
    vocabItemLearned: (_, args) => {
      const date = dayjs();
      const toReviewDate = date /*.add(1, "day")*/
        .format("MM-DD-YYYY");
      return VocabItem.findById(args.id).then(item =>
        item.update({ toReviewDate, toReviewDelay: 2 })
      );
    },
    //Seleccionar tots els items, si estan revisats augmentar delay i data, sino resetear data i delay
    vocabItemsReviewed: (_, { ids }) => {
      return VocabItem.findAll({
        where: {
          toReviewDate: {
            [Op.lte]: dayjs().format("MM-DD-YYYY")
          }
        }
      }).then(items =>
        items.forEach(item => {
          let toReviewDate;
          let toReviewDelay;
          //type ID is a fucking String, i HAVE TO CONVERT IT ALLWAYIS to integer, FUCK LIFE
          const isIdReviewed =
            ids.findIndex(id => parseInt(id, 10) === item.id) >= 0;
          if (ids.length > 0 && isIdReviewed) {
            toReviewDate = updateReviewDate(item.toReviewDelay);
            toReviewDelay = item.toReviewDelay * 2;
          } else {
            toReviewDate = resetReviewDate();
            toReviewDelay = 2;
          }
          return item.update({ toReviewDate, toReviewDelay });
        })
      );
    }
  }
};
