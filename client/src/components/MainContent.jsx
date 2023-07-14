import React from 'react';

import { Outlet } from "react-router-dom";
import WithAuth from './WithAuth';
import Footer from './Footer'
import '../App.css'
import SignIn from './login-components/SignIn';



const MainContent = ({currentUser, isLogged}) => {

    // style={{height: '560px'}}
    return (
        <div>
            <div className="container" style={{minHeight: '560px'}}>
                {/* {isLogged? */}
                    <Outlet context={[currentUser, isLogged]}/>
                {/* : <SignIn />
                } */}
                {/* <h1>hello, this is the main content component.</h1> */}
                
            </div>
            <div className="primary-bg">
                <Footer></Footer>
            </div>
        </div>
    );
}

export default WithAuth(MainContent);