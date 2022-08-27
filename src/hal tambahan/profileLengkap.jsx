import React from 'react';
import Wisata from '../Data/WISATA-SUMBAWA.jpg'
import About from '../component/About';
import { Link, Routes, Route } from 'react-router-dom'
function Profilelengkap() {
    return (
        <div className="Profile">
            <div className='container text-center'>
                <div className="row">
                    <div className="col-md-6">
                        <img src={Wisata} alt="" className='porfilelengkap'/>

                    </div>

                    <div className="col-md-6 biodata">

                        <ul> <h1>BIODATA KU</h1>
                            <li><b>Name:</b> Nandito Makdrian Poto</li>
                            <li><b> Place and date of birth: </b>Maluk, 06, Agustus, 2004</li>
                            <li><b>Age:</b> 17 Years Old</li>
                            <li> <b>Religion:</b> Kristen Protestan</li>
                            <li><b>Address: </b>Desa pasir putih, Kecamatan Maluk</li>
                            <li> <b>Education:</b>
                                <ol>SD (SDN 4 Maluk)</ol>
                                <ol>SMP (SMPN 1 Maluk)</ol>
                                <ol>SMK (SMKN 1 Maluk)</ol>

                                <Link to='/about'><button className='btnp'>Back</button></Link>
                            </li>
                            <br />
                         
                        </ul>

                        <Routes>
                            <Route path='/about' element={<About />} />
                        </Routes>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Profilelengkap;