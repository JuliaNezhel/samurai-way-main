import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import { store } from "./redux/state";
import { BrowserRouter } from "react-router-dom";
import { storeR } from "./redux/redux-store";
import { StatePagesType } from "./redux/state";

export let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={storeR.getState()}
                dispatch={storeR.dispatch.bind(storeR)}
            />
        </BrowserRouter>,
        document.getElementById("root")
    );
};

rerenderEntireTree( );

storeR.subscribe(rerenderEntireTree)

// storeR.subscribe(() => {
//     rerenderEntireTree(store.getstate())
// });