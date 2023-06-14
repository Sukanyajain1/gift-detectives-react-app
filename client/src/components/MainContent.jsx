import React from 'react';

import { Outlet } from "react-router-dom";
import WithAuth from './WithAuth';
import Footer from './Footer'
import '../App.css'



const MainContent = ({currentUser, isLogged}) => {

    // style={{height: '560px'}}
    return (
        <div>
            <div className="container" style={{minHeight: '560px'}}>
                {/* <h1>hello, this is the main content component.</h1> */}
                <Outlet context={[currentUser, isLogged]}/>
            </div>
            <div className="primary-bg">
                <Footer></Footer>
            </div>
        </div>
    );
}

export default WithAuth(MainContent);