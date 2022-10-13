import React from "react";
import {Col} from "reactstrap";
import { Link } from "react-router-dom";
import { iconTobar } from "./IconBar";
//import images

const YourLocations = () => {
    return (
        <Col md={7}>
            <ul className="list-inline mb-0 text-center text-md-start">
                <li className="list-inline-item">
                    <p className="fs-13 mb-0">
                        {" "}
                        <i className="mdi mdi-map-marker"></i> Your Location:{" "}
                        <Link to="#" className="text-dark">
                            New Caledonia
                        </Link>
                    </p>
                </li>
                <li className="list-inline-item">
                    <ul className="topbar-social-menu list-inline mb-0">
                        {(iconTobar || []).map((icon, key) => (
                            <li className="list-inline-item" key={key}>
                                <Link to="/" className="social-link">
                                    <i className={icon.classname}></i>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </li>
            </ul>
        </Col>
    )
}

export default YourLocations