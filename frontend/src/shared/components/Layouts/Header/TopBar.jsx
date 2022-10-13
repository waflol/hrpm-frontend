import React from "react";
import {Col, Container, Row} from "reactstrap";

import YourLocations from "./YourLocations";
import SignUpLink from "./SignUpLink";
import LanguageSelector from "./LanguageSelector";

const TopBar = () => {
  return (
    <React.Fragment>
      <div className="top-bar" style={{height: "44.5px"}}>
        <Container fluid className="custom-container">
          <Row className="g-0 align-items-center">
            <YourLocations/>
            <Col md={5}>
              <ul className="list-inline mb-0 text-center text-md-end">
                <SignUpLink/>
                <LanguageSelector/>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default TopBar;
