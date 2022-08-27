import React from 'react';
import About from './About';
import { Link, Routes, Route } from 'react-router-dom'

function Home() {
    return (

        <div className='home'>

            <div className="container ">
                <h1 className='nando'>Nandito Makdrian Poto</h1>
                <h3 style={{ color: 'white' }}>Web <span>Developer</span></h3>
                <p style={{ fontSize: '20px' }}>Find Me </p>
                <a href="https://www.instagram.com/nandito_ndo/" target="_blank" className='sosmed'>
                    <i class="fa-brands fa-instagram"></i>
                </a>

                <a href="https://github.com/Nandito06" target="_blank" className='sosmed'>
                    <i class="fa-brands fa-github"></i>
                </a>

                <br />
                <Link to='/about'> <button className='btn'>Next</button></Link>
            </div>
           
            <Routes>
                <Route path='/about' element={<About />} />
            </Routes>
        </div>

    );
}

export default Home;