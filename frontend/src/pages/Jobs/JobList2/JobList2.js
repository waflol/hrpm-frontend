import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import Section from '../../Jobs/JobList2/Section'

import JobVacancyPost2 from './JobVacancyPost2'
import Pagination from '../JobList2/Pagination'
import MetaTags from "react-meta-tags";

import JobSearchOptions from './JobSearchOptions'
import Popular from '../JobList2/Popular'
import Sidebar from './Sidebar'

const JobList2 = () => {
    return (
        <React.Fragment>
            <MetaTags>
            <title>Job List | JobFind</title>
            </MetaTags>
            <Section/>
            <section className="section">
            <Container >
            <Row>
            <Col lg={9}>
            <div className="me-lg-5">
            <JobSearchOptions/>
            <Popular/>
            <JobVacancyPost2/>
            <Pagination/>
            </div>            
            </Col>
            <Sidebar/>
            </Row>
            </Container>
            </section>

            
        </React.Fragment>
    )
}

export default JobList2;
