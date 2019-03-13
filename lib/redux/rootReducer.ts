import { combineReducers } from "redux";
import UserReducer, { IUserState } from "./UserReducer";

export interface IState {
  user: IUserState;
}

export default combineReducers({
  user: UserReducer
});
