import React from 'react';
import "./land-page.scss"

const LandPage = () => {
    return (
        <div className="land-page">
            <div className="container">
            <div className="lp-content-container">
                <div className="main-title">
                   <span> Green</span> Pay
                </div>
                <div className="sec-title">
                Crypto payment getway<br/>
                Bring crypto peyment to your bicnec

                </div>
                <ul className="pr-title">

                    <li>
                        <div className="icon">
                            <i className="fas fa-lock"></i>
                        </div>
                        <div className="dis">
                            100% Secure
                        </div>
                    </li>
                    <li>
                        <div className="icon">
                            <i className="fas fa-user-secret"></i>
                        </div>
                        <div className="dis">
                            No Authentication
                        </div>
                    </li>
                    <li>
                        <div className="icon">
                            <i className="fas fa-dollar-sign"></i>
                        </div>
                        <div className="dis">
                            Fair pricing
                        </div>
                    </li>
               
                </ul>
                <div className="btn-container">
                    <div className="btn">
                        Regist Now !
                    </div>
                </div>
            </div>

            </div>
        </div>
    );
}

export default LandPage;