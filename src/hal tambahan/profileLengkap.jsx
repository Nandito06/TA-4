import React from 'react';
import Wisata from '../Data/WISATA-SUMBAWA.jpg'
import About from '../component/About';
import { Link, Routes, Route } from 'react-router-dom'
import { AppContext } from '../Context/AppContext';
function Profilelengkap() {
    const contex = React.useContext(AppContext)
    return (
        <div className="Profile">
            <div className='container text-center'>
                <div className="row">
                    <div className="col-md-6">
                        <img src={Wisata} alt="Wisata Sumbawa" className='porfilelengkap'/>

                    </div>

                    <div className="col-md-6 biodata">

                        <ul>
                             <h1>{contex.lang==="en"?"My Biodata":"BIodata Ku"}</h1>
                            <li><b>{contex.lang==="en"?"Name:":"Nama:"}</b> Nandito Makdrian Poto</li>
                            <li><b>{contex.lang==="en"?" Place and date of birth:":"Tempat dan Tanggal Lahir:"}</b>Maluk, 06,{contex.lang==="en"?"August":"Agustus"}, 2004</li>
                            <li><b>{contex.lang==="en"?"Age:":"Umur:"}</b>{contex.lang==="en"?"17 Years old:":"17 tahun"}</li>
                            <li> <b>{contex.lang==="en"?"Religion:":"Agama:"}</b> {contex.lang==="en"?"Christian Protestant":"Kristen Protestan"}</li>
                            <li><b>{contex.lang==="en"?"Address:":"Alamat:"} </b>{contex.lang==="en"?"village":"desa"} pasir putih,{contex.lang==="en"?"Districts":"Kecamatan"} Maluk</li>
                            <li> <b>{contex.lang==="en"?"Education:":"Pendidikan:"}</b>
                                <ol>{contex.lang==="en"?"Primary school:":"SD:"} (SDN 4 Maluk)</ol>
                                <ol>{contex.lang==="en"?"Junior high school:":"SMP"} (SMPN 1 Maluk)</ol>
                                <ol>{contex.lang==="en"?"Senior high School:":"SMK:"} (SMKN 1 Maluk)</ol>

                                <Link to='/about'><button className='btnp'>{contex.lang==="en"?"back":"Kembali"}</button></Link>
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