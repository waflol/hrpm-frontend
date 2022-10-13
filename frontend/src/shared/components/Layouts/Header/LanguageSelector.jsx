import React, { useState } from "react";
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from "reactstrap";

//import images
import flagUs from "../../../../assets/images/flags/us.jpg";
import flagSp from "../../../../assets/images/flags/spain.jpg";
import flagGr from "../../../../assets/images/flags/germany.jpg";
import flagIt from "../../../../assets/images/flags/italy.jpg";
import flagRu from "../../../../assets/images/flags/russia.jpg";

const LanguageSelector = () => {
    //Language Dropdown
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen((prevState) => !prevState);
    return (
        <li className="list-inline-item align-middle">
            <Dropdown
                isOpen={dropdownOpen}
                toggle={toggle}
                className="d-inline-block language-switch"

            >
                <DropdownToggle tag="button" type="button" className="btn">
                    <img
                        src={flagUs}
                        alt=""
                        height="16"
                    />
                </DropdownToggle>

                <DropdownMenu className="dropdown-menu-end" end>
                    <DropdownItem
                        to="/"
                        className="dropdown-item notify-item language"
                        data-lang="eng"
                    >
                        <img
                            src={flagUs}
                            alt=""
                            className="me-1"
                            height="12"
                        />
                        <span className="align-middle">English</span>
                    </DropdownItem>
                    <DropdownItem
                        to="/"
                        className="dropdown-item notify-item language"
                        data-lang="sp"
                    >
                        <img
                            src={flagSp}
                            alt=""
                            className="me-1"
                            height="12"
                        />
                        <span className="align-middle">Spanish</span>
                    </DropdownItem>
                    <DropdownItem
                        to="/"
                        className="dropdown-item notify-item language"
                        data-lang="gr"
                    >
                        <img
                            src={flagGr}
                            alt=""
                            className="me-1"
                            height="12"
                        />
                        <span className="align-middle">German</span>
                    </DropdownItem>
                    <DropdownItem
                        to="/"
                        className="dropdown-item notify-item language"
                        data-lang="it"
                    >
                        <img
                            src={flagIt}
                            alt=""
                            className="me-1"
                            height="12"
                        />
                        <span className="align-middle">Italian</span>
                    </DropdownItem>
                    <DropdownItem
                        to="/"
                        className="dropdown-item notify-item language"
                        data-lang="ru"
                    >
                        <img
                            src={flagRu}
                            alt=""
                            className="me-1"
                            height="12"
                        />
                        <span className="align-middle">Russian</span>
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </li>
    )
}

export default LanguageSelector