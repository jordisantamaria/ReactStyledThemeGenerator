import {
  ITheme,
  IThemeAction,
  SET_THEME_COLOR,
  SET_THEME_FONTFAMILY,
  SET_THEME_FONTSIZE,
  SET_THEME_SPACE
} from './ThemeActions';
import theme from "../theme";

export const initialState: ITheme = theme;

function ThemeReducer(state = initialState, action: IThemeAction) {
  switch (action.type) {
    case SET_THEME_SPACE:
      const themeSpace = [...state.space];
      themeSpace[action.payload.space.index] = action.payload.space.value;
      return { ...state, space: themeSpace };
    case SET_THEME_FONTSIZE:
      const themeFontsize = [...state.fontSizes];
      themeFontsize[action.payload.fontSizes.index] = action.payload.fontSizes.value;
      return { ...state, fontSizes: themeFontsize };
    case SET_THEME_COLOR:
      const colors = {...state.colors};
      const colorKey = Object.keys(action.payload.colors)[0];
      colors[colorKey] = action.payload.colors[colorKey];

      return { ...state, colors };
    case SET_THEME_FONTFAMILY:
      const fonts = {...state.fonts};
      console.log('SET_THEME_FONTFAMILY = ', fonts);
      const fontKey = Object.keys(action.payload.fonts)[0];
      console.log('fontkey = ', fontKey);
      fonts[fontKey] = action.payload.fonts[fontKey];

      return { ...state, fonts };
    default:
      return state;
  }
}

export default ThemeReducer;
