module.exports = (sequelize, DataTypes) => {
  let VocabItem = sequelize.define("VocabItem", {
    word: {
      type: DataTypes.STRING,
      allowNull: false,
      notEmpty: true
    },
    translation: {
      type: DataTypes.STRING,
      allowNull: false,
      notEmpty: true
    },
    pronunciation: {
      type: DataTypes.STRING
    },
    toReviewDate: DataTypes.STRING,
    toReviewDelay: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    association: DataTypes.STRING
  });

  VocabItem.associate = function(models) {
    models.VocabItem.belongsToMany(models.VocabList, {
      through: "VocabListWithItems"
    });
  };

  return VocabItem;
};
