import React from 'react';
import { Container, Row } from 'reactstrap';
import Section from './Section';
import MetaTags from "react-meta-tags";
import QuizDetails from './QuizDetails';

const CandidateDetails = () => {
    return (
        <React.Fragment>
            <MetaTags>
            <title>Start Quiz | JobFind</title>
            </MetaTags>
            <Section/>
            <section className="section">
            <Container >
            <Row>
            <QuizDetails/>
            </Row>   
            </Container>
            </section> 
        </React.Fragment>
    )
}

export default CandidateDetails
