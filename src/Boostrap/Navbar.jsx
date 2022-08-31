import React from 'react';
import { Link, Route, Routes } from 'react-router-dom'
import './Navbar.css';
//Import Halamam
import Home from '../component/Home';
import About from '../component/About';
import Skillpage from '../component/Skillpage';
import Blog from '../component/Blog';
import { AppContext } from '../Context/AppContext';
// import Toggle from '../Toggle/toggle';

function Navbarmenu() {

    const contex = React.useContext(AppContext);


    return (
        <div className='navbarPosisi'>
            <nav class="navbar navbar-expand-lg  fixed-top navbar-dark">
                <div class="container">
                    <h1 class="navbar-brand itsnan" >It's <span>NaN</span> </h1>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav ms-auto">
                            <div className="nav-menu">
                               
                                <ul className="Nav">
                                    
                                
                                    <li class="nav-link active" aria-current="page" ><Link to="/">  {contex.lang === "en" ? "Home" : "Beranda"}</Link>
                                    </li>

                                    <li class="nav-link active" ><Link to='/about'> 
                                    {contex.lang === "en" ? "About" : "Tentang"}</Link>
                                    </li>

                                   
                                    <li class="nav-link active" > <Link to="/skillPage"> {contex.lang === "en" ? "SkillPage" : "Kemampuan"}</Link>
                                    </li>

                                   
                                    <li class="nav-link active"><Link to="/blog"> 
                                    {contex.lang === "en" ? "Project" : "Projek"}</Link></li>

                                    <li> <button class="nav-link bahasa" onClick={() => contex.onchangebahasa(contex.lang === "en" ? "id" : "en")} >{contex.lang==="en"?"en":"id"}</button></li>
                                   
                                    
                                    
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
