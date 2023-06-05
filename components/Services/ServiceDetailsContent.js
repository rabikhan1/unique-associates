import React from "react";
import Link from "next/link";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, Keyboard } from "swiper";
import { Controller } from 'swiper';
import { plotData } from '../../public/Data/PlotData'




function PortfolioDetailsContent2({ bdetails }) {
    console.log(plotData)
    const [mainImage, setMainImage] = useState('/images/hero-banner11.jpg');

    let currentYear = new Date().getFullYear();
    const slideper = plotData[0]?.images?.length
    console.log(slideper)
    return (
        <>
            <div className="container" >
                <div className="row d-flex justify-content-" >

                    <div className="col-lg-8 col-md-12 col-sm-12 pt-3 " data-aos="fade-up"
                        data-aos-duration="1200"
                        data-aos-delay="300">
                        <h2 > {bdetails?.plotNo}</h2>
                        <img className="col-lg-13" data-aos="zoom-in-down"
                            data-aos-duration="1200"
                            data-aos-delay="300" src={mainImage} alt='carImg' width='1000' height='400' />
                       <div >

                        <Swiper

                            navigation={true}
                            spaceBetween={1}
                            slidesPerView={4}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                },
                                276: {
                                    slidesPerView: 2,
                                },
                                768: {
                                    slidesPerView: 4 ,
                                },
                            }}
                            mousewheel={true}
                            keyboard={true}
                            modules={[Navigation, Mousewheel, Keyboard, Controller]}
                            className="mySwiper app-screenshots-slides"
                        >



                            {bdetails?.images?.map(img =>
                                <SwiperSlide key={img.id} >


                                    <img onClick={() => setMainImage(img.imgUrl) + 1} width='250' height='120' src={img.imgUrl} alt="image" data-aos="zoom-out"
                                        data-aos-duration="1200"
                                        data-aos-delay="300" />

                                </SwiperSlide>
                            )}


                        </Swiper>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 pt-3 " >

                        <div className="row ptb-30" data-aos="fade-up"
                            data-aos-duration="1200"
                            data-aos-delay="300">
                            <h1 style={{fontSize:'65px'}} className="d-flex justify-content-center pb-50 ">
                                Features
                            </h1>
                                    <div className="d-flex justify-content-left">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <ul style={{ fontSize:'25px', listStyleType: "none" }}>
                                    <li>
                                        <span className="icon">
                                            <i className="mkd-icon-font-awesome fa fa-check "></i>
                                        </span>
                                        <span className="spanfont">Corner Plot</span>
                                    </li>
                                    <li>
                                        <span className="icon">
                                            <i className="mkd-icon-font-awesome fa fa-check "></i>
                                        </span>
                                        <span className="spanfont">Facing Park</span>
                                    </li>
                                    <li>
                                        <span className="icon">
                                            <i className="mkd-icon-font-awesome fa fa-check "></i>
                                        </span>
                                        <span className="spanfont">Electricity</span>
                                    </li>
                                    {/* <li>
                                        <span className="icon">
                                            <i className="mkd-icon-font-awesome fa fa-check "></i>
                                        </span>
                                        <span className="spanfont">40ft Road</span>
                                    </li> */}
                                    <li>
                                        <span className="icon">
                                            <i className="mkd-icon-font-awesome fa fa-check "></i>
                                        </span>
                                        <span className="spanfont">Gas</span>
                                    </li>
                                    </ul>
                            </div>
                            {/* <div className="col-lg-4 col-md-12 col-sm-12 ">
                                <ul style={{ listStyleType: "none" }}>
                                    <li>
                                        <span className="icon">
                                            <i className="mkd-icon-font-awesome fa fa-check "></i>
                                        </span>
                                        <span className="spanfont">Weddings Packages</span>
                                    </li>
                                    <li>
                                        <span className="icon">
                                            <i className="mkd-icon-font-awesome fa fa-check "></i>
                                        </span>
                                        <span className="spanfont">Sight Seeing Packages </span>
                                    </li>
                                    <li>
                                        <span className="icon">
                                            <i className="mkd-icon-font-awesome fa fa-check "></i>
                                        </span>
                                        <span className="spanfont">Tours Service</span>
                                    </li>
                                    <li>
                                        <span className="icon">
                                            <i className="mkd-icon-font-awesome fa fa-check "></i>
                                        </span>
                                        <span className="spanfont">No Hidden Charges</span>
                                    </li>
                                    <li>
                                        <span className="icon">
                                            <i className="mkd-icon-font-awesome fa fa-check "></i>
                                        </span>
                                        <span className="spanfont">Water Bottles</span>
                                    </li>
                                    <li>
                                        <span className="icon">
                                            <i className="mkd-icon-font-awesome fa fa-check "></i>
                                        </span>
                                        <span className="spanfont">NewsPapers Available</span>
                                    </li>
                                </ul>
                            </div> */}
                            {/* <div className="col-lg-5 col-md-12 col-sm-12">
                                <ul style={{ listStyleType: "none" }}>
                                    <li>
                                        <span className="icon">
                                            <i className="mkd-icon-font-awesome fa fa-check "></i>
                                        </span>
                                        <span className="spanfont">baby seats also available</span>
                                    </li>
                                    <li>
                                        <span className="icon">
                                            <i className="mkd-icon-font-awesome fa fa-check "></i>
                                        </span>
                                        <span className="spanfont">Daily Cleaning</span>
                                    </li>
                                    <li>
                                        <span className="icon">
                                            <i className="mkd-icon-font-awesome fa fa-check "></i>
                                        </span>
                                        <span className="spanfont">Regular Maintenance</span>
                                    </li>
                                    <li>
                                        <span className="icon">
                                            <i className="mkd-icon-font-awesome fa fa-check "></i>
                                        </span>
                                        <span className="spanfont">Three Point Seat belts</span>
                                    </li>
                                    <li>
                                        <span className="icon">
                                            <i className="mkd-icon-font-awesome fa fa-check "></i>
                                        </span>
                                        <span className="spanfont">Fitted Air Bags</span>
                                    </li>
                                    <li>
                                        <span className="icon">
                                            <i className="mkd-icon-font-awesome fa fa-check "></i>
                                        </span>
                                        <span className="spanfont">Latest Model Cars(2021, {currentYear})</span>
                                    </li>
                                </ul>
                            </div> */}
                            </div>
                        </div>
                    </div>
                </div>


                <div className="justify-content-center d-flex others-options pb-4 mb-4"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="300">
                    <Link href="/contact">
                        <a className="btn btn-primary">BOOK NOW</a>
                    </Link>
                </div>
            </div>
        </>
    );
}
export default PortfolioDetailsContent2;

