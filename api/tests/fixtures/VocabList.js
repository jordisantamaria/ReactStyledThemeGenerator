const VocabList = {
  id: 1,
  listName: "lista de test"
};

const VocabLists = [
  {
    id: 1,
    listName: "lista de test2"
  },
  {
    id: 2,
    listName: "lista de test"
  },
  {
    id: 3,
    listName: "lista de test"
  }
];

module.exports = {
  single: VocabList,
  all: VocabLists,
  byListName: listName => VocabLists.filter(list => list.listName === listName)
};
