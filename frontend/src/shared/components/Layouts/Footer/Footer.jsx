import React from 'react'
import MainFooter from './MainFooter'
import FooterAlt from './FooterAlt'
import Subscribe from '../Subscribe'
const Footer = () => {
  return (
    <React.Fragment>
        <Subscribe/>
        <MainFooter/>
        <FooterAlt/>
    </React.Fragment>
  )
}

export default Footer