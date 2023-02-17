import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import AboutContent from '../components/About/AboutContent';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';

class Aabout extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <PageBanner 
                    pageTitle="About Us" 
                    BGImage="bg-one"
                />  

                <AboutContent />

                <CtaAreaTwo />
                </>
        );
    }
}

export default Aabout;