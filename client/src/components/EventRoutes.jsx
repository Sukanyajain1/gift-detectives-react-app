import React from 'react';
import { Outlet } from "react-router-dom";
import '../App.css'



const EventRoutes = ({currentUser, isLogged}) => {

    // style={{height: '560px'}}
    return (
        <div>
            <h1>hello, this is the event routes component.</h1>
            <Outlet context={[currentUser, isLogged]}/>
        </div>
    );
}

export default EventRoutes;