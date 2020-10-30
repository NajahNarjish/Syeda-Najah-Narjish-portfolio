import React from 'react';
import pic from '../../images/pro_pic.jpg';
import "./Banner.css"

const Banner = () => {
    return (
        <div className="container-fluid banner ">
            <div class = "text-center">
                <img src={pic} className = "img-fluid w-25 rounded-circle mt-5 " alt="profile_pic"/>
                <h3 class = "">Hi there, I am</h3>
                <h1>Syeda Najah Narjish</h1>
                <h5>This is my portfolio</h5>
            </div>
            

        </div>
    );
};

export default Banner;