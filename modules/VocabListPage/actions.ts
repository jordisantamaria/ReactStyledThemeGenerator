export const CREATE_NEW_LIST = "CREATE_NEW_LIST";

export interface IVocabListAction {
  type: string;
  payload?: {
    name?: string;
  }
}

export function createNewList(name: string): IVocabListAction {
  return {
    type: CREATE_NEW_LIST,
    payload: {
      name,
    },
  };
}
