import React from 'react';
import { Link, Route, Routes } from 'react-router-dom'
import './Navbar.css';
//Import Halamam
import Home from '../component/Home';
import About from '../component/About';
import Skillpage from '../component/Skillpage';
import Blog from '../component/Blog';


function Navbarmenu() {


    return (
        <div className='navbarPosisi'>
            <nav class="navbar navbar-expand-lg  fixed-top navbar-dark">
                <div class="container">
                    <h1 class="navbar-brand" style={{ fontSize: '60px' }}>It's <span>NaN</span> </h1>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav ms-auto">
                            <div className="nav-menu">
                                <ul className='Nav'>
                                    <li class="nav-link active" aria-current="page" ><Link to="/"> Home</Link>
                                    </li>

                                    <li class="nav-link active" ><Link to='/about'> About</Link>
                                    </li>
                                    <br />
                                    <li class="nav-link active" > <Link to="/skillPage"> Skill Page</Link>
                                    </li>
                                    <br />
                                    <li class="nav-link active"><Link to="/blog"> Blog</Link></li>
                                </ul>
                            </div>

                        </div>


                    </div>

                </div>

            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/skillPage" element={<Skillpage />} />
                <Route path="/blog" element={<Blog />} />
            </Routes>
        </div>
    );
}

export default Navbarmenu;
