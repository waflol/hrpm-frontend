import React from 'react'
import { Link } from 'react-router-dom';
import darkLogo from "../../../../assets/images/logo-dark.png";
import lightLogo from "../../../../assets/images/logo-light.png";
const LogoCompany = () => {
    return (
        <Link className="navbar-brand text-dark fw-bold me-auto" to="/">
            <img src={darkLogo} height="50" alt="" className="logo-dark" />
            <img src={lightLogo} height="50" alt="" className="logo-light" />
        </Link>
    )
}

export default LogoCompany