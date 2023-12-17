import { combineReducers, createStore } from "redux";
import { dialogsReduser } from './dialogs-reduser';
import { profileReduser } from './profile-reduser';
import { sideBarReduser } from "./sideBar-reduser";


let redusers = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    sideBar: sideBarReduser
})
export type RootReduserType = ReturnType<typeof redusers>

export let storeR = createStore(redusers)

//@ts-ignore
window.storeR = storeR