import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand ml-5                                             " href="#">Najah's Portfolio</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active mr-5">
                            <Link class="nav-link" to="/">Home</Link>
                            {/* <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> */}
                        </li>
                        <li class="nav-item mr-5">
                            <Link class="nav-link" to="/projects">Projects</Link>
                            {/* <a class="nav-link" href="#">Projects</a> */}
                        </li>
                        <li class="nav-item mr-5">
                            <a class="nav-link" href="#">Blog</a>
                        </li>
                        <li class="nav-item mr-5">
                            <a class="nav-link" href="#">Resume</a>
                        </li>
                        <li class="nav-item mr-5">
                            <a class="nav-link" href="#">About me</a>
                        </li>
                       
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;