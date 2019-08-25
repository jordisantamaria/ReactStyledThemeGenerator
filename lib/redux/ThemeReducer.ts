import { ITheme, IThemeAction, SET_THEME_SPACE } from "./ThemeActions";
import theme from "../theme";

export const initialState: ITheme = theme;

function ThemeReducer(state = initialState, action: IThemeAction) {
  switch (action.type) {
    case SET_THEME_SPACE:
      console.log("cambiando space");
      return { ...state, space: action.payload.space };
    default:
      return state;
  }
}

export default ThemeReducer;
