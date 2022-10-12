import React from 'react';
import {NavLink} from 'react-router-dom';
import companyLogo from '../../assets/images/logo/logo.svg'
const LogoNav = props => {
    return (
        <div className="w-60 max-w-full px-4">
            <NavLink to="/" className="navbar-logo block w-full py-5">
                <img
                    src={companyLogo}
                    alt="logo"
                    className="header-logo w-full"
                />
            </NavLink>
        </div>
    )
};

export default LogoNav;