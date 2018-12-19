/*
const Sequelize = require('sequelize');

//construimos la coneccion a sequelize con la info de la db
const sequelize = new Sequelize('learn_japanese', 'root', '1nf0rm4t1c4', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,
});

const VocabList = sequelize.import(__dirname + "/models/VocabList");
const VocabItem = sequelize.import(__dirname + "/models/VocabItem");

VocabList.belongsToMany(VocabItem, {through: 'VocabListWithItems'});
VocabItem.belongsToMany(VocabList, {through: 'VocabListWithItems'});

sequelize.sync({
  force: true // borra la tabla y la vuelve a recrear
});*/
