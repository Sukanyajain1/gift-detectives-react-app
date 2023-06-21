import React from 'react';
import { Outlet } from "react-router-dom";
import '../App.css'



const WishListRoutes = ({currentUser, isLogged}) => {

    // style={{height: '560px'}}
    return (
        <div>
            <h1>hello, this is the wishlist routes component.</h1>
            <Outlet context={[currentUser, isLogged]}/>
        </div>
    );
}

export default WishListRoutes;