import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import MainBanner from '../components/HomePages/BusinessAgency/MainBanner';
import Services from '../components/HomePages/BusinessAgency/Services';
import OurWorks from '../components/HomePages/BusinessAgency/OurWorks';
import CtaAreaThree from '../components/Common/CtaAreaThree';

function Index () {
        return (
            <>
                <NavbarTwo />

                <MainBanner />

                {/* <About /> */}

                <Services />

                <OurWorks />

                <CtaAreaThree />
            </>
        );
    }


export default Index;