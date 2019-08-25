import { combineReducers } from "redux";
import UserReducer, { IUserState } from "./UserReducer";
import { ITheme } from "./ThemeActions";
import ThemeReducer from "./ThemeReducer";

export interface IState {
  user: IUserState;
  theme: ITheme;
}

export default combineReducers({
  user: UserReducer,
  theme: ThemeReducer
});
