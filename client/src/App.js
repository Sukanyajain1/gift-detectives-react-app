import {
  Routes,
  Route} from 'react-router-dom'
import './App.css';
import React, { useState } from "react";

import TopNav from './components/TopNav'
// import Footer from './components/Footer'
import MainContent from './components/MainContent'
import Dashboard from './components/Dashboard'
import Home from './components/Home'
import SignIn from './components/SignIn'
import WithAuth from './components/WithAuth';


function App() {
  const MainContentWithAuth = WithAuth(MainContent);        //custom HOC

  const NavWithAuth = WithAuth(TopNav);

  const [isMember, setIsMember] = useState(true);
  return (
    <div className="App">
      <NavWithAuth isMember={isMember} setIsMember={setIsMember}/>
      <Routes>
        <Route path = "/" element= {<MainContentWithAuth/>}>
          <Route path = "home" element= {<Home/>}/>
          <Route path = "dashboard" element= {<Dashboard/>}/>
          <Route path = "signin" element= {<SignIn isMember={isMember} setIsMember={setIsMember}/>}/>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
