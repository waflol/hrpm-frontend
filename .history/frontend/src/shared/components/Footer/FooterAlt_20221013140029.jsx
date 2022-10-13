import React from 'react'
import { Row, Col, Container, NavLink } from 'reactstrap'
import { Link } from "react-router-dom";

const FooterAlt = () => {
  return (
    <div className="footer-alt">
      <Container >
        <Row >
          <Col lg={12}>
            <p className="text-white-50 text-center mb-0">
              {new Date().getFullYear()} &copy; Jobcy - Job Listing Page
              Project in <NavLink to="https://github.com/waflol/hrpm" target="_blank"
                className="text-reset text-decoration-underline">Github</NavLink>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default FooterAlt