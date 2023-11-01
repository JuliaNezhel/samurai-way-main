import React from 'react';
import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Header } from './components/header/Header';
import { Profile } from './components/profile/Profile';
import { Dialogs } from './components/dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import { Music } from './components/music/Music';
import { News } from './components/news/News';
import { Setting } from './components/setting/Setting';
import { MyPosts } from './components/profile/myPosts/MyPosts';
import { DialogItemType } from './components/dialogs/gialogItem/DialogItem';
import { MessageType } from './components/dialogs/message/Message';

type AppPropsType = {
  myPosts: Array<MyPosts>
  dialogs: DialogItemType[]
  messages: MessageType[]
}



function App(props: AppPropsType) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route
            path='/profile'
            render={() => <Profile myPosts={props.myPosts} />} />
          <Route
            path='/dialog'
            render={() => <Dialogs dialogs={props.dialogs}  messages={props.messages}/>} />
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
    </BrowserRouter>

  );
}

export default App;
