export const SET_THEME_SPACE = "SET_THEME_SPACE";

export interface IThemeAction {
  type: string;
  payload?: ITheme;
}

export interface ITheme {
  fontSizes?: number[];
  accessToken?: string;
  colors?: Object;
  space?: number[];
  fonts?: Object;
  breakpoints?: number[];
  textStyles?: Object;
  colorStyles?: Object;
  buttons?: Object;
}

export function setSpace(space: number[]): IThemeAction {
  return {
    type: SET_THEME_SPACE,
    payload: {
      space
    }
  };
}
