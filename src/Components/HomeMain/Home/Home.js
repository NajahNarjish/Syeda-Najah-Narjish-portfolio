import React from 'react';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';

import ProjectSummary from '../ProjectSummary/ProjectSummary';
import "./Home.css"

const Home = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <ProjectSummary/>
        </div>
    );
};

export default Home;