module.exports = (sequelize, DataTypes) => {
  let VocabList = sequelize.define("VocabList", {
    listName: DataTypes.STRING,
    user: {
      type: DataTypes.STRING,
      allowNull: false,
      notEmpty: true
    }
  });

  VocabList.associate = function(models) {
    models.VocabList.belongsToMany(models.VocabItem, {
      through: "VocabListWithItems"
    });
  };

  return VocabList;
};
