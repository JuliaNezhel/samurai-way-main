import { combineReducers, createStore } from "redux";
import { dialogsReduser } from './dialogs-reduser';
import { profileReduser } from './profile-reduser';
import { sideBarReduser } from "./sideBar-reduser";
import { usersReduser } from './users-reduser';


let reducers = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    sideBar: sideBarReduser,
    usersPage: usersReduser
})
export type RootReduserType = ReturnType<typeof reducers>

export let storeR = createStore(reducers)

//@ts-ignore
window.storeR = storeR