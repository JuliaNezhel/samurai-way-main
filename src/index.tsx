import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "./redux/state";
import { BrowserRouter } from "react-router-dom";

export let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getstate()}
                addPost={store.addPost.bind(store)}
                updateNewPostText={store.updateNewPostText.bind(store)} />
        </BrowserRouter>,
        document.getElementById("root")
    );
};

rerenderEntireTree();

store.subsctiber(rerenderEntireTree);