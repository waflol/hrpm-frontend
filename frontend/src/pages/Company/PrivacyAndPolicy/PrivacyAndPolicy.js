import React from 'react';
import Section from './Section';
import MetaTags from "react-meta-tags";
import PrivacyAndPolicyPage from '../../Company/PrivacyAndPolicy/PrivacyAndPolicyPage';

const PrivacyAndPolicy = () => {
    return (
        <React.Fragment>
            <MetaTags>
            <title>Privacy & Policy | JobFind</title>
            </MetaTags>
            <Section/>
            <PrivacyAndPolicyPage/>
        </React.Fragment>
    )
}
export default PrivacyAndPolicy;
