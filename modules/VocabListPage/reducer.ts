import {CREATE_NEW_LIST, IVocabListAction} from './actions';

export interface IVocabListsState {
  customLists: IVocabList[];
  reviewList: IVocabList[];
}

export interface IVocabList {
  listName: string;
  vocabItemsList: IVocabItem[];
}
export interface IVocabItem {
  word: string;
  translation: string;
  pronunciation: string;
  association: string;
}
export const initialState: IVocabListsState = {
  customLists: [],
  reviewList: []
};

function VocabListReducer(state = initialState, action: IVocabListAction) {
  switch (action.type) {
    case CREATE_NEW_LIST:
      return {customLists: [...state.customLists, action.payload.list]};
    default:
      return state;
  }
}

export default VocabListReducer;
