import React from 'react';
import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Header } from './components/header/Header';
import { Profile } from './components/profile/Profile';
import { Dialogs } from './components/dialogs/Dialogs';
import { Route, Routes } from 'react-router-dom';
import { Music } from './components/music/Music';
import { News } from './components/news/News';
import { Setting } from './components/setting/Setting';
import { DispatchActionsTypes, StatePagesType } from './redux/state';

type AppPropsType = {
    state: StatePagesType
    // addPost: () => void
    // updateNewPostText: (newPost: string) => void
    dispatch: (action: DispatchActionsTypes) => void
}


function App(props: AppPropsType) {
    return (
        <div className='app-wrapper'>
            <Header />
            <Navbar state={props.state.sideBar} />
            <div className='app-wrapper-content'>
                <Routes>
                    <Route
                        path='/profile'
                        element={
                            <Profile
                                profilePage={props.state.profilePage}
                                dispatch={props.dispatch}
                            />} />
                    <Route
                        path='/dialog'
                        element={<Dialogs
                            state={props.state.dialogsPage} />}
                    />
                    <Route
                        path='/news'
                        element={<News />}
                    />
                    <Route
                        path='/music'
                        element={<Music />}
                    />
                    <Route
                        path='/Setting'
                        element={<Setting />}
                    />
                </Routes>

            </div>
        </div>
    );
}

export default App;
