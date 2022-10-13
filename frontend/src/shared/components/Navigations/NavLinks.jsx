import React, { useState } from "react";
import classname from "classnames";
import {NavItem,NavLink} from "reactstrap";
import { Link } from 'react-router-dom';
const NavLinks = () => {
    const [home, setHome] = useState(false);
    const [company, setCompany] = useState(false);
    const [blog, setBlog] = useState(false);

    return (
        <ul className="navbar-nav mx-auto navbar-center">
            <NavItem className="dropdown dropdown-hover">
                <NavLink to="/" id="homedrop" className="arrow-none" onClick={() => setHome(!home)}> Home </NavLink>
            </NavItem>
            <NavItem className="dropdown dropdown-hover">
                <NavLink to="/" id="company" className="arrow-none"> Company </NavLink>
            </NavItem>
            <NavItem className="dropdown dropdown-hover">
                <NavLink to="/findjob" id="findjob" className="arrow-none"> Find Job </NavLink>
            </NavItem>
            <NavItem className="dropdown dropdown-hover">
                <NavLink to="/blog" id="productdropdown" role="button" data-bs-toggle="dropdown" onClick={() => setBlog(!blog)}>
                    Blog
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="nav-link" to="/quizz" id="quizz">Quiz</NavLink>
            </NavItem>
            <NavItem className="dropdown dropdown-hover">
                <NavLink to="/#" id="jobsdropdown" role="button" onClick={() => setCompany(!company)}>
                    Others <div className="arrow-down"></div>
                </NavLink>
                <ul className={classname("dropdown-menu dropdown-menu-center", { show: company })} aria-labelledby="jobsdropdown">
                    <li><Link className="dropdown-item" to="/aboutus">About Us</Link></li>
                    <li><Link className="dropdown-item" to="/services">Services</Link></li>
                    <li><Link className="dropdown-item" to="/team">Team</Link></li>
                    <li><Link className="dropdown-item" to="/pricing">Pricing</Link></li>
                    <li><Link className="dropdown-item" to="/privacyandpolicy">Priacy & Policy</Link></li>
                    <li><Link className="dropdown-item" to="/faqs">Faqs</Link></li>
                    <li><Link className="dropdown-item" to="/contact">Contact</Link></li>
                </ul>
            </NavItem>
        </ul>
    )
}

export default NavLinks;