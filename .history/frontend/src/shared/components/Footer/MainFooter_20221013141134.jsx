import React from 'react'
import { Row, Col, Container } from 'reactstrap'
import { Link } from "react-router-dom";
import Subscribe from './Subscribe'
import FooterAlt from './FooterAlt'
const MainFooter = () => {
  return (
    <div>
        <Subscribe/>
        MainFooter
        <FooterAlt/>
    </div>
  )
}

export default MainFooter