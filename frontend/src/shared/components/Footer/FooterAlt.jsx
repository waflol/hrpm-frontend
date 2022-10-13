import React from 'react'
import { Row, Col, Container } from 'reactstrap'

const FooterAlt = () => {
  return (
    <div className="footer-alt">
      <Container >
        <Row >
          <Col lg={12}>
            <p className="text-white-50 text-center mb-0">
              {new Date().getFullYear()} &copy; JobF - Job Listing Page
              Project in <a
                href="https://github.com/waflol/hrpm/tree/main/frontend" target="_blank" rel="noreferrer" className="text-reset text-decoration-underline">
                Github
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default FooterAlt