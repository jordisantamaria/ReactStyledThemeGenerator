module.exports = (sequelize, DataTypes) => {
  VocabList =  sequelize.define("VocabList", {
    listName: DataTypes.STRING,
  })

  VocabList.associate = function (models) {
    models.VocabList.belongsToMany(models.VocabItem, {
      through: 'VocabListWithItems'
    });
  };

  return VocabList;
}