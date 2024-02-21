import React from "react";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { Route } from "react-router-dom";
import { News } from "./components/news/News";
import { Setting } from "./components/setting/Setting";
import { DialogsContainer } from "./components/dialogs/DialogsContainer";
import { AppStateType } from "./redux/redux-store";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import { Login } from "./components/Login/Login";

type AppPropsType = {
  state: AppStateType;
};

function App(props: AppPropsType) {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar state={props.state.sideBar} />
      <div className="app-wrapper-content">
        <Route
          exact
          path="/profile/:userId?"
          render={() => <ProfileContainer />}
        />
        <Route exact path="/dialog" render={() => <DialogsContainer />} />
        <Route exact path="/news" render={() => <News />} />
        <Route exact path="/users" render={() => <UsersContainer />} />
        <Route exact path="/Setting" render={() => <Setting />} />
        <Route exact path="/login" render={() => <Login />} />
      </div>
    </div>
  );
}

export default App;
