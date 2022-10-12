import React from 'react';
import {NavLink} from 'react-router-dom';
const AuthActions = props => {
    return (
        <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
            <NavLink
                to='/'
                className="loginBtn py-3 px-7 text-base font-medium text-white hover:opacity-70"
            >
                Sign In
            </NavLink>
            <NavLink
                to='/'
                className="signUpBtn rounded-lg bg-white bg-opacity-20 py-3 px-6 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark"
            >
                Sign Up
            </NavLink>
        </div>
    )
};

export default AuthActions;