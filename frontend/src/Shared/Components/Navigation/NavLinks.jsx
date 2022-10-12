import React from 'react'
import { NavLink } from 'react-router-dom';
const NavLinks = props => {
    return (
        <ul className="blcok lg:flex">
            <li className="group relative">
                <NavLink
                    to='/'
                    className="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70"
                >
                    Home
                </NavLink>
            </li>
            <li className="group relative">
                <NavLink
                    to='/'
                    className="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12"
                >
                    About
                </NavLink>
            </li>
            <li className="group relative">
                <NavLink
                    to='/'
                    className="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12"
                >
                    Pricing
                </NavLink>
            </li>
            <li className="group relative">
                <NavLink
                    to='/'
                    className="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12"
                >
                    Team
                </NavLink>
            </li>
            <li className="group relative">
                <NavLink to='/'
                    className="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12"
                >
                    Contact
                </NavLink>
            </li>
        </ul>

    )
};

export default NavLinks;