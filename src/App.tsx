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

function App() {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route  path='/profile' component={Profile} />
          <Route  path='/dialog' component={Dialogs} />
          <Route  path='/news' component={News} />
          <Route  path='/music' component={Music} />
          <Route  path='/Setting' component={Setting} />
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
