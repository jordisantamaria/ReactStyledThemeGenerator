module.exports = `
  type VocabItem {
    id: ID!
    word: String!
    translation: String!
    pronunciation: String
    association: String
    toReviewDate: Date
    toReviewDelay: Int
  }
  
  input NewVocabItem {
    word: String
    translation: String
    pronunciation: String
    association: String
  }
  
  
`;
