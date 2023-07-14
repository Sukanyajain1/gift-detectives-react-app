import {
  Routes,
  Route} from 'react-router-dom'
import './App.css';
import React, { useState } from "react";

import WithAuth from './components/WithAuth';
import MainContent from './components/MainContent'
import SignIn from './components/login-components/SignIn'
import TopNav from './components/nav-components/TopNav'
import Dashboard from './components/Dashboard'
import AccountInfo from './components/AccountInfo'
import EventRoutes from './components/EventRoutes'
import WishListRoutes from './components/WishListRoutes'
import GiftRoutes from './components/GiftRoutes'
import Home from './components/Home'
import OneEvent from './components/event-components/OneEvent'
import OneWishList from './components/wishList-components/OneWishList'
import OneGift from './components/gift-components/OneGift'
import ChatPage from './components/chat-components/ChatPage'
import NewEvent from './components/event-components/NewEvent'
import NewWishList from './components/wishList-components/NewWishList'
import NewGift from './components/gift-components/NewGift'


function App() {
  const MainContentWithAuth = WithAuth(MainContent);        //custom HOC

  const NavWithAuth = WithAuth(TopNav);

  const [isMember, setIsMember] = useState(true);
  return (
    <div className="App">
      <NavWithAuth isMember={isMember} setIsMember={setIsMember}/>
      <Routes>

        <Route path = "/" element= {<MainContentWithAuth/>}>
          <Route path = "signin" element= {<SignIn isMember={isMember} setIsMember={setIsMember}/>}/>
          <Route path = "home" element= {<Home/>}/>
          <Route path = "dashboard" element= {<Dashboard/>}/>
          <Route path = "chats" element= {<ChatPage/>}/>
          <Route path = "my-profile" element= {<AccountInfo/>}/>

    {/* all of the event routes nested in the EventRoutes component */}
          <Route path = "event" element= {<EventRoutes/>}>
            <Route path = "new" element= {<NewEvent/>}/>
            {/* <Route path = "show/:id" element= {<OneEvent/>}/>
            <Route path = "edit/:id" element= {<EditEvent/>}/> */}
          </Route>

    {/* all of the wishlist routes nested in the WishListRoutes component */}
          <Route path = "wish-list" element= {<WishListRoutes/>}>
            <Route path = "new" element= {<NewWishList/>}/>
            {/* <Route path = "show/:id" element= {<OneWishList/>}/>
            <Route path = "edit/:id" element= {<EditWishList/>}/> */}
          </Route>

    {/* all of the gift routes nested in the GiftRoutes component */}
          <Route path = "gift" element= {<GiftRoutes/>}>
            <Route path = "new" element= {<NewGift/>}/>
            {/* <Route path = "show/:id" element= {<OneGift/>}/>
            <Route path = "edit/:id" element= {<EditGift/>}/> */}
          </Route>

        </Route>

      </Routes>
    </div>
  );
}

export default App;
