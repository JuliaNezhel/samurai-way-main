import React from "react";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { Header } from "./components/header/Header";
import { Profile } from "./components/profile/Profile";
import { Route, Routes } from "react-router-dom";
import { News } from "./components/news/News";
import { Setting } from "./components/setting/Setting";
import { DialogsContainer } from "./components/dialogs/DialogsContainer";
import { UsersContainer } from "./components/users/UsersContainer";
import { AppStateType } from "./redux/redux-store";

type AppPropsType = {
  state: AppStateType;
};

function App(props: AppPropsType) {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar state={props.state.sideBar} />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/dialog" element={<DialogsContainer />} />
          <Route path="/news" element={<News />} />
          <Route path="/users" element={<UsersContainer />} />
          <Route path="/Setting" element={<Setting />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
