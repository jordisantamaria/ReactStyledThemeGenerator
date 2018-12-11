import { IVocabList } from "./reducer";

export const CREATE_NEW_LIST = "CREATE_NEW_LIST";

export interface IVocabListAction {
  type: string;
  payload?: {
    list?: IVocabList;
  }
}

export function createNewList(list: IVocabList): IVocabListAction {
  return {
    type: CREATE_NEW_LIST,
    payload: {
      list,
    },
  };
}
