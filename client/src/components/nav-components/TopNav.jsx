import React, {useEffect, useState} from 'react';
import axios from 'axios'
import { useNavigate, NavLink } from 'react-router-dom';
// import '../App.css'
import WithAuth from '../WithAuth';
import SigninNav from './SigninNav';


const TopNav = (props) => {

    // const {currentUser, setCurrentUser} = props;
    const {currentUser, isLogged, isMember, setIsMember} = props;

    const navigate = useNavigate();
    const [numInCart, setNumInCart] = useState();


    // useEffect(() => {

    //     // if(isLogged) {
    //     //     // axios.get(`http://localhost:8000/api/pizzas/in_cart/${currentUser._id}`)
    //     //     //     .then((res)=>{
    //     //     //         // console.log("This is the api result: ", res);
    //     //     //         setNumInCart((res.data.results).length);
    //     //     //     })
    //     //     //     .catch(err=>{
    //     //     //         console.log("Axios error: ", err);
    //     //     //     });
    //     // }
    // }, [currentUser, isLogged]);

    const logout = ()=>{
        axios.get("http://localhost:8000/api/users/logout", {withCredentials:true})
            .then(res=>{
                navigate("/signin", { replace: true });
            })
            .catch(err=>{
                console.log("errrr logging out", err)
            })
    }
    return (
        <div>


                <div className="nav primary-bg">
                    <div className="container-fluid d-flex align-items-center justify-content-between">
                        <h1>Gift Detectives</h1>
                        {isLogged ? (
                            <div>
                                <NavLink to="/dashboard" className={({isActive}) => (isActive ? "active-style" : 'none')}>Dashboard</NavLink>
                                <NavLink to="/chats" className={({isActive}) => (isActive ? "active-style" : 'none')}>Inbox ({numInCart})</NavLink>
                                <NavLink to="/my-profile" className={({isActive}) => (isActive ? "active-style" : 'none')}>Account Info</NavLink>
                                <NavLink onClick={logout} className={({isActive}) => (isActive ? "active-style" : 'none')}>Logout</NavLink>
                            </div>
                        ) : 
                        <div>
                            <SigninNav isMember={isMember} setIsMember={setIsMember}></SigninNav>
                        </div>

                        }
                    </div>
                </div>
        </div>
    );
};


export default WithAuth(TopNav);
