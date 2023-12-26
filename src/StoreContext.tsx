import React from "react";
import { Store, EmptyObject } from "redux";
import { storeR } from "./redux/redux-store";
import { StatePagesType } from "./redux/state";

type StoreContext = {
    store: Store<EmptyObject & StatePagesType, any>
}

export const StoreContext = React.createContext(storeR)

export const Provider = (props: any) =>{
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}