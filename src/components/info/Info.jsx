import React from 'react';

import "./info.scss"
const Info = () => {
    return (
        <div className="info">
            <div className="container">
                <div className="info-content">
                   
                    <div className="card">
                        <div className="icon">
                            <div className="img">
                                <img src="/imgs/card-icons/1.png" alt="" />
                            </div>
                        </div>
                        <div className="dic">
                            <div className="title">
                                100% secure
                            </div>
                            <div className="dic-text">
                                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum ma asd adfasfds asdffg aceholder before the final copy is
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <div className="img">
                                <img src="/imgs/card-icons/2.png" alt="" />
                            </div>
                        </div>
                        <div className="dic">
                            <div className="title">
                            Easy to use
                            </div>
                            <div className="dic-text">
                                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum ma asd adfasfds asdffg aceholder before the final copy is
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <div className="img">
                                <img src="/imgs/card-icons/3.png" alt="" />
                            </div>
                        </div>
                        <div className="dic">
                            <div className="title">
                            Fair pricing
                            </div>
                            <div className="dic-text">
                                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum ma asd adfasfds asdffg aceholder before the final copy is
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Info;