import React, { useState } from "react";
import NavLinks from "./NavLinks";
import { Collapse, NavbarToggler } from "reactstrap";
const NavToggler = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <>
            <div>
                <NavbarToggler className="me-3" type="button" onClick={() => toggle()}>
                    <i className="mdi mdi-menu"></i>
                </NavbarToggler>
            </div>
            <Collapse isOpen={isOpen} className="navbar-collapse" id="navbarCollapse">
                <NavLinks />
            </Collapse>
        </>

    )
}

export default NavToggler;