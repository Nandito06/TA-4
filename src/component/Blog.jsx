import React from 'react';
import terraimage from "../Data/terrafresh.jpg"

function Blog() {
    return (
        <div className='blog'>
            <div className="container text-center">
                <div className="jarakblog">
                    <h1>PROJECT</h1>
                    <h3>Recent Project 2022 </h3>
                </div>
                <div className="container project">

                    <div className="row">
                        <img src={terraimage} alt="" />
                        <div className='teks'>
                            <a href='https://terrafresh.netlify.app/' style={{ color: 'yellow', textDecoration: 'none', fontSize: '20px' }}>TERRA FRESH</a>
                            <p>terra fresh adalah project tentang simulasi belanja sayur buah online,yang di buat untuk membantu pembeli dalam memilih buah dan sayuran yang berkualitas, kaya akan kandungan gizi, dan ramah lingkungan. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;