import React from 'react';
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
        </div>
    );
}

export default MainPage;