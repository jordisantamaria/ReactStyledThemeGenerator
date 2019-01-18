module.exports = `
 type VocabList {
    id: ID!
    listName: String!
    VocabItems: [VocabItem]
  }
  
  input NewVocabList {
    listName: String!
    VocabItems: [NewVocabItem]
  }
`;
