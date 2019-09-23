export const SET_THEME_SPACE = "SET_THEME_SPACE";
export const SET_THEME_COLOR = "SET_THEME_COLOR";
export const SET_THEME_FONTSIZE = "SET_THEME_FONTSIZE";
export const SET_THEME_FONTFAMILY = "SET_THEME_FONTFAMILY";

export interface IThemeAction {
  type: string;
  payload?: IPayload;
}

interface IPayload {
  name?: string;
  fontSizes?: INumberArrayValue;
  colors?: Object;
  space?: INumberArrayValue;
  fonts?: Object;
  breakpoints?: string;
  textStyles?: Object;
  colorStyles?: Object;
  buttons?: Object;
}

export interface INumberArrayValue {
  value: number;
  index: number;
}


export interface ITheme {
  id?: string;
  name?: string;
  fontSizes?: number[];
  colors?: Object;
  space?: number[];
  fonts?: Object;
  breakpoints?: string[];
  textStyles?: Object;
  colorStyles?: Object;
  buttons?: Object;
}

export function setSpace(space: INumberArrayValue): IThemeAction {
  return {
    type: SET_THEME_SPACE,
    payload: {
      space
    }
  };
}

export function setThemeColor(color: Object): IThemeAction {
  return {
    type: SET_THEME_COLOR,
    payload: {
      colors: color
    }
  };
}

export function setThemeFontSize(fontSizes: INumberArrayValue): IThemeAction {
  return {
    type: SET_THEME_FONTSIZE,
    payload: {
      fontSizes
    }
  };
}

export function setThemeFontFamily(fonts: Object): IThemeAction {
  return {
    type: SET_THEME_FONTFAMILY,
    payload: {
      fonts
    }
  };
}
