
interface IVocabListsState {
  customLists: any[];
  reviewList: any[];
}
export const initialState: IVocabListsState = {
  customLists: [],
  reviewList: []
};

function VocabListReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default VocabListReducer;
