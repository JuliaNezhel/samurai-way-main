import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { storeR } from "./redux/redux-store";
import { Provider } from "react-redux";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={storeR}>
      <App state={storeR.getState()} />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
