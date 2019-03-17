const { gql } = require("apollo-server");

module.exports = gql`
  type VocabList {
    id: ID!
    listName: String!
    VocabItems: [VocabItem]
  }

  input NewVocabList {
    listName: String!
    VocabItems: [NewVocabItem]
  }

  extend type Query {
    vocabLists: [VocabList]
    vocabList(id: Int): VocabList
    vocabListByListName(listName: String): VocabList
    vocabListsNoToken: [VocabList]
  }

  extend type Mutation {
    vocabListAdd(vocabList: NewVocabList): VocabList
  }
`;
