import {
  AnyAction,
  applyMiddleware,
  combineReducers,
  createStore,
} from "redux";
import { dialogsReduser } from "./dialogs-reduser";
import { profileReduser } from "./profile-reduser";
import { sideBarReduser } from "./sideBar-reduser";
import { usersReduser } from "./users-reduser";
import { authReduser } from "./auth-reduser";
import thunkMiddleware, { ThunkDispatch } from "redux-thunk";
import { useDispatch } from "react-redux";

let reducer = combineReducers({
  profilePage: profileReduser,
  dialogsPage: dialogsReduser,
  sideBar: sideBarReduser,
  usersPage: usersReduser,
  auth: authReduser,
});
export type AppStateType = ReturnType<typeof reducer>;

export let store = createStore(reducer, applyMiddleware(thunkMiddleware));

export type AppThunkDispatch = ThunkDispatch<AppStateType, any, AnyAction>;

export const useAppDispatch = () => useDispatch<AppThunkDispatch>();

//@ts-ignore
window.store = store;
