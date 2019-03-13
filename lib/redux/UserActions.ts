import { IUser } from "./UserReducer";

export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const UPDATE_USER_EXPIRES_AT = "UPDATE_EXPIRES_AT";

export interface IUserAction {
  type: string;
  payload?: {
    user?: IUser;
    expiresAt?: string;
  };
}

export function loginUser(user: IUser): IUserAction {
  return {
    type: LOGIN_USER,
    payload: {
      user
    }
  };
}

export function logoutUser(): IUserAction {
  return {
    type: LOGOUT_USER,
    payload: {}
  };
}

export function updateUserExpiresAt(expiresAt): IUserAction {
  return {
    type: UPDATE_USER_EXPIRES_AT,
    payload: {
      expiresAt
    }
  };
}
