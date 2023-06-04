import React, { Component } from 'react';
import Link from 'next/link';
import { plotData } from '../../public/Data/PlotData';
class ServicesStyleOne extends Component {
    render() {
        return (
            <>
                <div className="bg-fcfbfb pt-100 pb-70">
                    <div className="container">
                        <div className="row justify-content-center">
                            {plotData.map(p => 
                            <div className="col-lg-4 col-sm-6">
                                <div className="fleet-grid-box">
                                    {/*Fleet Grid Thumb Start*/}
                                    <figure className="fleet-thumb">
                                        <img src={p.images[1].imgUrl} width='300' height='10' alt='jjjj' />
                                        {/* <figcaption className="fleet-caption">

                                            <span className="rated">Top Rated</span>
                                        </figcaption> */}
                                    </figure>
                                    {/*Fleet Grid Thumb End*/}
                                    {/*Fleet Grid Text Start*/}
                                    <div className="fleet-info-box">
                                        <div className="fleet-info">
                                            <h3>{p.size} marla Plot</h3>

                                            <ul className="fleet-meta">
                                                <li><i className="fas fa-taxi" />{p.PlotCategory}</li>
                                                <li><i className="fas fa-user-circle" />{p.PlotSite}</li>
                                            </ul>
                                        </div>
                                        <a href={`/services/${p.id}`} className="tj-btn">Book Now <i className="fa fa-arrow-circle-right" aria-hidden="true" /></a>
                                    </div>
                                    {/*Fleet Grid Text End*/}

                                </div>

                            </div>
                            )}


                            {/* #224980 #45B5D4 #2A2F61 */}

                          
                            {/* <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one">
                                    <i className="pe-7s-display2 bg-6610f2"></i>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>Web Development</a>
                                        </Link>
                                    </h3>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one">
                                    <i className="pe-7s-light bg-ffb700"></i>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>Digital Marketing</a>
                                        </Link>
                                    </h3>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one">
                                    <i className="pe-7s-phone bg-fc3549"></i>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>Mobile App Development</a>
                                        </Link>
                                    </h3>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one">
                                    <i className="pe-7s-cart bg-00d280"></i>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>eCommerce Development</a>
                                        </Link>
                                    </h3>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one">
                                    <i className="pe-7s-users bg-ff612f"></i>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>Marketing & Reporting</a>
                                        </Link>
                                    </h3>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
                                </div>
                            </div>
    
                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one">
                                    <i className="pe-7s-headphones bg-6610f2"></i>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>IT Consultancy</a>
                                        </Link>
                                    </h3>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one">
                                    <i className="pe-7s-users bg-13c4a1"></i>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>Social Marketing</a>
                                        </Link>
                                    </h3>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
                                </div>
                            </div> */}

                            {/* <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one">
                                    <i className="pe-7s-comment bg-fc3549"></i>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>Admin Support</a>
                                        </Link>
                                    </h3>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ServicesStyleOne;