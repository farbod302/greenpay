import React from 'react';


import "./footer.scss"

const Footer = () => {
    return (

        <div className="footer">
            <div className="container">
                <div className="title">
                    Around The World
                </div>
                <div className="social">
                    <div>
                        <i className="fab fa-telegram"></i>
                    </div>
                    <div>
                    <i className="fab fa-instagram"></i>

                    </div>
                    <div>
                    <i className="fab fa-twitter"></i>
                    </div>
                </div>
                <div className="copy-right">
                    All rights resived 2022<i class="fas fa-copyright"/>
                </div>
            </div>
        </div>
    );
}

export default Footer;