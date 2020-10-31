import React from 'react';
import Header from '../../HomeMain/Header/Header';
import SingleProjectDetail from '../SingleProjectDetail/SingleProjectDetail';
import fakedata from '../../../Fakedata/fakedata'

const Projects = () => {
    return (
        <div>
            <Header/>
            <h1>Welcome to my projects</h1>
            <p>Please visit my Github to see all projects</p>
            <p>Below are some of those...</p>
            <div className = "container">
                {
                    fakedata.map(item => <SingleProjectDetail project={item}/>)
                }
            </div>
            
            
     
        </div>
    );
};

export default Projects;