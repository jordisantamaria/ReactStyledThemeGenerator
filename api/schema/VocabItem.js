module.exports = `
  type VocabItem {
    id: ID!
    word: String!
    translation: String!
    pronunciation: String
    association: String
  }
  
  input NewVocabItem {
    word: String
    translation: String
    pronunciation: String
    association: String
  }
  
  
`