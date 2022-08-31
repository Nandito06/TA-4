import React from 'react';
import About from './About';
import { Link, Routes, Route } from 'react-router-dom'
import { AppContext } from '../Context/AppContext';
function Home() {
    const contex = React.useContext(AppContext)
    return (

        <div className='home'>

            <div className="container ">
                <h1 className='nando'>Nandito Makdrian Poto</h1>
                <h3 style={{ color: 'white' }}>Web <span>Developer</span></h3>
                <p style={{ fontSize: '20px' }}>{contex.lang === "en" ? "FInd Me" : "Temukan Saya"} </p>
                <a href="https://www.instagram.com/nandito_ndo/" target="_blank" className='sosmed'>
                    <i class="fa-brands fa-instagram"></i>
                </a>

                <a href="https://github.com/Nandito06" target="_blank" className='sosmed'>
                    <i class="fa-brands fa-github"></i>
                </a>

                <br />
                <Link to='/about'> <button className='btn'>{contex.lang === "en"? "Next":"Lanjut"}</button></Link>
            </div>
           
            <Routes>
                <Route path='/about' element={<About />} />
            </Routes>
        </div>

    );
}

export default Home;