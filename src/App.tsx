import React from 'react';
import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Header } from './components/header/Header';
import { Profile } from './components/profile/Profile';
import { Dialogs } from './components/dialogs/Dialogs';
import { Route } from 'react-router-dom';
import { Music } from './components/music/Music';
import { News } from './components/news/News';
import { Setting } from './components/setting/Setting';
import { StatePagesType } from './redux/state';

type AppPropsType = {
    state: StatePagesType
}


function App(props: AppPropsType) {
    return (
        <div className='app-wrapper'>
            <Header />
            <Navbar state={props.state.sideBar} />
            <div className='app-wrapper-content'>
                <Route
                    path='/profile'
                    render={() => <Profile state={props.state.profilePage} />} />
                <Route
                    path='/dialog'
                    render={() => <Dialogs
                        state={props.state.dialogsPage} />} />
                <Route
                    path='/news'
                    render={() => <News />} />
                <Route
                    path='/music'
                    render={() => <Music />} />
                <Route
                    path='/Setting'
                    render={() => <Setting />} />
            </div>
        </div>
    );
}

export default App;
