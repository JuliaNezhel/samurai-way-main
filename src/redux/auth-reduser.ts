import { Dispatch } from "redux";
import { AuthResponseType, authAPI } from "../components/header/api/api";

//type
type AuthType = {
  id: null | number;
  login: null | string;
  email: null | string;
  isAuth: boolean;
};
type AuthActionType = ReturnType<typeof setUserDataAC>;

const inintialState: AuthType = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
};
export const authReduser = (
  state: AuthType = inintialState,
  action: AuthActionType
): AuthType => {
  switch (action.type) {
    case "SET-USER-DATA":
      return { ...state, ...action.data, isAuth: true };
    default:
      return { ...state };
  }
};

export const setUserDataAC = (data: AuthResponseType) => {
  return {
    type: "SET-USER-DATA",
    data,
  } as const;
};

export const getAuthUserData = () => (dispatch: Dispatch) => {
  authAPI.me().then((res) => {
    if (res.data.resultCode === 0) {
      dispatch(setUserDataAC(res.data.data));
    }
  });
};
