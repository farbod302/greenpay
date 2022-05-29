import React from 'react';
import "./navbar.scss"

const Navbar = () => {

    const toggle_nav=()=>{

        const nav=document.querySelector(".nav-container")
        nav.classList.toggle("active-nav")
    }

    return (
        <div className="navbar">
            <div className="container nav-container">
                <div className="logo">
                    <i className="fas fa-bars toggle-nav" onClick={toggle_nav}/>
                    <img src="/imgs/logo.png" alt="" />
                </div>
                <ul className="nav-links">
                    <li className="active">Home</li>
                    <li>Docs</li>
                    <li>FAQ</li>
                </ul>
                <div className="connect-to-wallet">
                    <div className="connect-btn">
                        Connect to wallet
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;