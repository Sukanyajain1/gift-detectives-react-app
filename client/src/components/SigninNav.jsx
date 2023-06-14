import React from 'react';
import { Link } from 'react-router-dom';


const SigninNav = ({isMember, setIsMember}) => {

    return (
        <>
            {isMember?
                <div className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link onClick={(e)=>{setIsMember(false)}} className="nav-link">New User? Create an Account</Link>
                    </li>
                </div>
            :
                <div className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link onClick={(e)=>{setIsMember(true)}} className="nav-link">Already have an account? Login</Link>
                    </li>
                </div>
            }
        </>
    );
}

export default SigninNav;