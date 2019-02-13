module.exports = `
  type VocabItem {
    id: ID!
    word: String!
    translation: String!
    pronunciation: String
    association: String
    learned: Boolean
  }
  
  input NewVocabItem {
    word: String
    translation: String
    pronunciation: String
    association: String
  }
  
  
`;
