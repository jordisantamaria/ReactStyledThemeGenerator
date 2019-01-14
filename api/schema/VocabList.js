module.exports = `
 type VocabList {
    id: ID!
    listName: String!
    vocabItemList: [VocabItem]
  }
  
  input NewVocabList {
    listName: String!
    vocabItemList: [NewVocabItem]
  }
`
