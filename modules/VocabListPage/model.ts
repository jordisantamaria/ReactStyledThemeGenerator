export interface IVocabListsState {
  customLists: IVocabList[];
  reviewList: IVocabList[];
}

export interface IVocabList {
  listName: string;
  VocabItems: IVocabItem[];
}
export interface IVocabItem {
  id?: any;
  word: string;
  translation: string;
  pronunciation: string;
  association: string;
}
