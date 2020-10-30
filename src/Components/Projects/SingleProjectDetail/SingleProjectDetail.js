import React from 'react';

const SingleProjectDetail = (props) => {
    const {title, technology, framework, detail} = props.project;
    return (
        <div>
            <div className = "row">
                <div className="col-md-5">
                    <img src="" alt="screenshot"/>
                </div>
                <div className = 'col-md-7'>
                    <h1>{title}</h1>
                    <h3>Technology: {technology}</h3>
                    <h3>Framework: {framework}</h3>
                    <p>Detail: {detail}</p>
                    <button>Github</button>
                    <button>Live site</button>
                </div>
            </div>  
        </div>
    );
};

export default SingleProjectDetail;