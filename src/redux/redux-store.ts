import {
  AnyAction,
  applyMiddleware,
  combineReducers,
  createStore,
} from "redux";
import { dialogsReducer } from "./dialogs-reducer";
import { profileReducer } from "./profile-reducer";
import { sideBarReducer } from "./sideBar-reducer";
import { usersReducer } from "./users-reducer";
import { authReducer } from "./auth-reducer";
import thunkMiddleware, { ThunkDispatch } from "redux-thunk";
import { useDispatch } from "react-redux";
import{reducer as formReducer} from 'redux-form'

let reducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sideBar: sideBarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer
});
export type AppStateType = ReturnType<typeof reducer>;

export let store = createStore(reducer, applyMiddleware(thunkMiddleware));

export type AppThunkDispatch = ThunkDispatch<AppStateType, any, AnyAction>;

export const useAppDispatch = () => useDispatch<AppThunkDispatch>();

//@ts-ignore
window.store = store;
