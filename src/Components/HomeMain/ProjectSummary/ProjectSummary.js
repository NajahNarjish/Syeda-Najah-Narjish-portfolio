import React from 'react';
import project1 from '../../../images/project1.png';
import project2 from '../../../images/project2.png';
import project3 from '../../../images/project3.png';
import project4 from '../../../images/project4.png';
import "./ProjectSummary.css"


const ProjectSummary = () => {
    return (
        <div className = "mx-5">
            <h1>Projects</h1>
            <div className="">
                <div class="card-deck row">
                    <div className="col-md-3 col-12 col-sm-6">
                        <div class="card ">
                            <img class="card-img-top img-fluid image" src={project1} alt="Card image cap"></img>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div class="card-footer">
                                <button class="">Live site</button>
                                <button class="">Github</button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-3 col-12 col-sm-6">
                        <div class="card ">
                            <img class="card-img-top img-fluid image" src={project2} alt="Card image cap"></img>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div class="card-footer">
                                <button class="">Live site</button>
                                <button class="">Github</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 col-12 col-sm-6">
                        <div class="card ">
                            <img class="card-img-top img-fluid image" src={project3} alt="Card image cap"></img>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div class="card-footer">
                                <button class="">Live site</button>
                                <button class="">Github</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 col-12 col-sm-6">
                        <div class="card ">
                            <img class="card-img-top img-fluid image" src={project4} alt="Card image cap"></img>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div class="card-footer">
                                <button class="">Live site</button>
                                <button class="">Github</button>
                            </div>
                        </div>
                    </div>         
                </div>
            </div>
        </div>
    );
};

export default ProjectSummary;