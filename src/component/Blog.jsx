import React from 'react';
import terraimage from "../Data/terrafresh.jpg"
import { AppContext } from '../Context/AppContext';
function Blog() {
    const contex = React.useContext(AppContext)
    return (
        <div className='blog'>
            <div className="container text-center">
                <div className="jarakblog">
                    <h1> {contex.lang === "en"?"Project":"Projek"}</h1>
                    <h3>{contex.lang==="en"?"Recent Project 2022":"Projek Terakhir 2022"} </h3>
                </div>
                <div className="container project">

                    <div className="row">
                        <img src={terraimage} alt="" />
                        <div className='teks'>
                            <a href='https://terrafresh.netlify.app/' style={{color:'yellow',textDecoration:'none'}}>TERRA FRESH</a>
                            <p className='terra'>{contex.lang==="en"?"terra fresh is a project about online fruit vegetable shopping simulation, which was created to assist buyers in choosing quality fruits and vegetables, rich in nutritional content, and environmentally friendly.":"terra fresh adalah project tentang simulasi belanja sayur buah online,yang di buat untuk membantu pembeli dalam memilih buah dan sayuran yang berkualitas, kaya akan kandungan gizi, dan ramah lingkungan."} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;