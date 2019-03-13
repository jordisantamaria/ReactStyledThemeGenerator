import {
  IUserAction,
  LOGIN_USER,
  LOGOUT_USER,
  UPDATE_USER_EXPIRES_AT
} from "./UserActions";

export interface IUser {
  user_id: string;
  accessToken: string;
  name?: string;
  email?: string;
  email_verified?: boolean;
  picture?: string;
}
export interface IUserState extends IUser {
  expiresAt: string;
}

export const initialState: IUserState = {
  user_id: "",
  accessToken: "",
  expiresAt: null
};

function UserReducer(state = initialState, action: IUserAction) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, ...action.payload.user };
    case LOGOUT_USER:
      return { initialState };
    case UPDATE_USER_EXPIRES_AT:
      return { ...state, expiresAt: action.payload.expiresAt };
    default:
      return state;
  }
}

export default UserReducer;
