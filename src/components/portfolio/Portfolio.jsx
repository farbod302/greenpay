import React from 'react';

import "./portfolio.scss"

const Portfolio = () => {
    return (
        <div className="portfolio">
            <div className="container">
                <div className="main-title">
                    Create your cryptocurrency portfolio today
                </div>
                <div className="options">
                    <div className="dis">
                        <div className="each-dis">
                            <div className="icon">
                                <img src="/imgs/profilo/1.png" alt="" />
                            </div>
                            <div className="txt">
                                <div className="card-title">
                                    Lorem
                                </div>
                                <div className="card-dis">
                                    In publishing and graphic design, Lorem ipsum is a placeholder text commonlyIn publishing and graphic design, Lorem ipsum is a placeholder text commonly
                                </div>
                            </div>
                        </div>
                        <div className="each-dis">
                            <div className="icon">
                                <img src="/imgs/profilo/2.png" alt="" />
                            </div>
                            <div className="txt">
                                <div className="card-title">
                                    Lorem
                                </div>
                                <div className="card-dis">
                                    In publishing and graphic design, Lorem ipsum is a placeholder text commonlyIn publishing and graphic design, Lorem ipsum is a placeholder text commonly
                                </div>
                            </div>
                        </div>
                        <div className="each-dis">
                            <div className="icon">
                                <img src="/imgs/profilo/3.png" alt="" />
                            </div>
                            <div className="txt">
                                <div className="card-title">
                                    Lorem
                                </div>
                                <div className="card-dis">
                                    In publishing and graphic design, Lorem ipsum is a placeholder text commonlyIn publishing and graphic design, Lorem ipsum is a placeholder text commonly
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="chart-img">
                        <img src="/imgs/profilo/chart.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;