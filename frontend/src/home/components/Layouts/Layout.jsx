import React from 'react';
import Section from './Section';
import MetaTags from "react-meta-tags";

const LayoutHome = () => {
    return (
        <React.Fragment>
            <MetaTags>
            <title>Home | Jobcy - Job Listing Template | Themesdesign</title>            
            </MetaTags>
            <Section/>
            
        </React.Fragment>
    )
}
export default LayoutHome;
