import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {  state, addPost, StatePagesType, updateNewPostText, subsctiber } from "./redux/state";
import { BrowserRouter } from "react-router-dom";

export let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App   state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>,
        document.getElementById("root")
    );
};

rerenderEntireTree();

subsctiber(rerenderEntireTree);