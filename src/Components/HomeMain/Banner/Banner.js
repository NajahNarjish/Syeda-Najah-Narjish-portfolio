import React from 'react';
// import pic from '../../../images/pro_pic.jpg';
import "./Banner.css";
import banner1 from '../../../images/background1.jpg';
import banner2 from '../../../images/background2.jpg'

import MyPDF from './Syeda_Najah_Narjish-Resume.pdf';

const Banner = () => {
    return (
        <div className="banner">

            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src={banner1} alt="First slide"></img>
                        <div class="carousel-caption d-none d-md-block">
                            <p style ={{fontSize:"35px"}}>Hi, I am </p>
                            <p style ={{fontSize:"65px", fontStyle:"italic"}}>Syeda Najah Narjish</p>
                            <p style ={{fontSize:"25px"}}>A FrontEnd Web Developer who loves to play with design and web technologies. </p>
                            <button class="btn btn-secondary ">
                                <a href={MyPDF} download="My_File.pdf" className ="text-white"> Get my Resume</a>
                            </button>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={banner2} alt="Second slide"></img>
                        <div class="carousel-caption d-none d-md-block">
                        <p style ={{fontSize:"35px"}}>Hi, I am </p>
                            <p style ={{fontSize:"65px", fontStyle:"italic"}}>Syeda Najah Narjish</p>
                            <p style ={{fontSize:"25px"}}>A FrontEnd Web Developer who loves to play with design and web technologies. </p>
                            <button class="btn btn-secondary ">
                                <a href={MyPDF} download="My_File.pdf" className ="text-white"> Get my Resume</a>
                            </button>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>


            {/* <div class="text-center">
                            <img src={pic} className="img-fluid w-25 rounded-circle mt-5 " alt="profile_pic" />
                            <h3 class="">Hi there, I am</h3>
                            <h1>Syeda Najah Narjish</h1>
                            <h5>This is my portfolio</h5>
                            <a href={MyPDF} download="My_File.pdf"> Download my RESUME </a>

                        </div> */}


        </div>
    );
};

export default Banner;