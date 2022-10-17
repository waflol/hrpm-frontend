import React from 'react';
import { Container } from 'reactstrap';
import JobFilters from './QuizFilters';
import Section from './Section';
import Pagination from '../../Jobs/JobList2/Pagination';
import MetaTags from "react-meta-tags";
import QuizGridDetails from './QuizGridDetails';

const QuizGrid = () => {
    return (
        <React.Fragment>
            <MetaTags>
            <title>Quiz | JobFind</title>
            </MetaTags>
            <Section/>
            <section className="section">
            <Container>
            <JobFilters/>
            <QuizGridDetails/>
            <Pagination/>
            </Container>
            </section>
        </React.Fragment>
    )
}

export default QuizGrid
