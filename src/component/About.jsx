import React from 'react';
import { Link, Route, Routes } from 'react-router-dom'
import Profilelengkap from '../hal tambahan/profileLengkap';
import foto from '../Data/foto.jpg';
function About() {
    return (
        <div className='about'>

            <div className="container text-center mobile">
              
                <div className="row"> 
                <h1 className='h1about'>About Me</h1>
                    <div className="col-md-6  imgAbout">
                   

                        <img src={foto} alt="foto nando " className='gambarA'/>
                    </div>

                    <div className="col-md-6 text-center textAbout" style={{ marginTop: '100px' }} >

                        <h3>
                            I'm Nando and I'm a Web Developer</h3>
                        <p>

                            Ini adalah projek pertamaku, dan ini adalah website pertama yang aku buat, saya adalah orang yang sedang belajar membuat website, jujur ini adalah pengalaman pertama dalam mengoding, jujur awalnya capek dan pusing karna banyak yg harus di kerjakan, tapi lama kelamaan itu semua menjadi sesuatu yang asik dan seru dan semakin menarik untuk di pelajari. Jadi dalam website pertama ini saya akan memperkenalkan diri saya sekaligus menceritakan beberapa hal tentang saya.</p>



                        <Link to="/about/biodataLengkap" className='btnabout'>Biodata</Link>
                    </div>

                </div>

            </div>
            <Routes>
                <Route path="/about/biodataLengkap" element={<Profilelengkap />} />
            </Routes>
        </div>

    );
}

export default About;