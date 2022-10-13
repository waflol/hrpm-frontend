import React from "react";
import {Container} from "reactstrap";
import LogoCompany from "./LogoCompany";
import NavToggler from "./NavToggler";
import Notification from "./Notification";
import UserSetting from "./UserSetting";
const MainNavBar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg fixed-top sticky " id="navigation">
        <Container fluid className="custom-container">
          <LogoCompany/>
          <NavToggler/>
          
          <ul className="header-menu list-inline d-flex align-items-center mb-0">
            <Notification/>
            <UserSetting/>
          </ul>
        </Container>
      </nav>
    </React.Fragment>
  )
}

export default MainNavBar;