import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import WorksStyleOne from '../components/Portfolio/WorksStyleOne';
import WorksStyleTwo from '../components/Portfolio/WorksStyleTwo';
import CtaAreaThree from '../components/Common/CtaAreaThree';

class Portfolio extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <PageBanner 
                    pageTitle="Our Portfolio" 
                    BGImage="bg-three"
                />  

                <WorksStyleOne />

                <WorksStyleTwo />

                <CtaAreaThree />
                
            </>
        );
    }
}

export default Portfolio;