import React from 'react';
import Footer from '../footer/Footer';
import GetStart from '../get-start/GetStart';
import Info from '../info/Info';
import LandPage from '../land-page/LandPage';
import Navbar from '../navbar/Navbar';
import Portfolio from '../portfolio/Portfolio';


const MainPage = () => {
    return (
        
        <div className="main-page">
            <Navbar/>
            <LandPage/>
            <Info/>
            <GetStart/>
            <Portfolio/>
            <Footer/>
        </div>
    );
}

export default MainPage;