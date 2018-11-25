import { combineReducers } from 'redux';
import VocabListReducer, {IVocabListsState} from '../../modules/VocabListPage/reducer';

export interface IState {
  vocabList: IVocabListsState,
}

export default combineReducers({
  vocabList: VocabListReducer,
});
