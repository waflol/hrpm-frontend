import React from 'react';
// import {CSSTransition} from 'react-transition-group';
// import { ReactDOM } from 'react-dom';
const NavBarToggle = props => {
    return (
        <button
            id="navbarToggler"
            className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
        >
            <span
                className="relative my-[6px] block h-[2px] w-[30px] bg-black"
            ></span>
            <span
                className="relative my-[6px] block h-[2px] w-[30px] bg-black"
            ></span>
            <span
                className="relative my-[6px] block h-[2px] w-[30px] bg-black"
            ></span>
        </button>
    )
}

export default NavBarToggle;