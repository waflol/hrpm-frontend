import React from 'react'
import { Container } from 'reactstrap'
import CompanyDetails from './CompanyDetails'
import Section from './Section';
import MetaTags from "react-meta-tags";

const CompanyList = () => {
    return (
        <React.Fragment>
            <MetaTags>
            <title>Companies | JobFind</title>
            </MetaTags>
            <Section/>
            <section className="section">
            <Container>
            <CompanyDetails/>
            </Container>
            </section>
        </React.Fragment>
    )
}

export default CompanyList
