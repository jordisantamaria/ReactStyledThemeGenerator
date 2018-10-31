import {CREATE_NEW_LIST, IVocabListAction} from './actions';

export interface IVocabListsState {
  customLists: any[];
  reviewList: any[];
}
export const initialState: IVocabListsState = {
  customLists: [],
  reviewList: []
};

function VocabListReducer(state = initialState, action: IVocabListAction) {
  switch (action.type) {
    case CREATE_NEW_LIST:
      return {customLists: [...state.customLists, action.payload.name]};
    default:
      return state;
  }
}

export default VocabListReducer;
