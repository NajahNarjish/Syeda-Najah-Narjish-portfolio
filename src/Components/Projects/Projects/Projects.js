import React from 'react';
import Header from '../../Header/Header';
import SingleProjectDetail from '../SingleProjectDetail/SingleProjectDetail';

const fakedata = [{title: "Creative Agency", technology: "Node.js, MongoDB", framework: "React, Material-UI", detail: "It is a fullstack project"}]
const Projects = () => {
    return (
        <div>
            <Header/>
            <h1>Welcome to my projects</h1>
            <p>Please visit my Github to see all projects</p>
            <p>Below are some of those...</p>
            {
                fakedata.map(item => <SingleProjectDetail project={item}/>)
            }
            
     
        </div>
    );
};

export default Projects;