import React, { useState } from "react";
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
} from "reactstrap";
import profileImage from "../../../../assets/images/profile.jpg";
import { Link } from 'react-router-dom';

const UserSetting = () => {
    const [userProfile, setUserProfile] = useState(false);
    const dropDownuserprofile = () => setUserProfile((prevState) => !prevState);
    return (
        <Dropdown
            onClick={() => setUserProfile(!userProfile)}
            isOpen={userProfile}
            toggle={dropDownuserprofile}
            className="list-inline-item">
            <DropdownToggle to="#" className="header-item d-flex align-items-center" id="userdropdown" type="button" tag="a" aria-expanded="false">
                <img src={profileImage} alt="mdo" width="35" height="35" className="rounded-circle me-1" />
                <span className="d-none d-md-inline-block fw-medium">Hi, Jennifer</span>
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-end" aria-labelledby="userdropdown" end>
                <li><Link className="dropdown-item" to="/managejobs">Manage Jobs</Link></li>
                <li><Link className="dropdown-item" to="/bookmarkjobs">Bookmarks Jobs</Link></li>
                <li><Link className="dropdown-item" to="/myprofile">My Profile</Link></li>
                <li><Link className="dropdown-item" to="/signout">Logout</Link></li>
            </DropdownMenu>
        </Dropdown>
    )
}

export default UserSetting