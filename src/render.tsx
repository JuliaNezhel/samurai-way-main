import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { addPost, StatePagesType } from "./redux/state";
import { BrowserRouter } from "react-router-dom";

export let rerenderEntireTree = (state: StatePagesType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App  addPost={addPost} state={state} />
        </BrowserRouter>,
        document.getElementById("root")
    );
};
