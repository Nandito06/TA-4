import React from 'react';

function Skillpage() {
    return (
        <div className="skill">
            <div className='container text-center'>
                <div className='row'>
                    <div className='col-md-6' >
                        <h1>Skill Page</h1>
                        <br />
                        <div class="column right">
                            <div class="bars">
                                <div class="info">
                                    <span>HTML</span>
                                    <span>80%</span>
                                </div>
                                <div class="line html"></div>
                            </div>
                            <div class="bars">
                                <div class="info">
                                    <span>CSS</span>
                                    <span>80%</span>
                                </div>
                                <div class="line css"></div>
                            </div>
                            <div class="bars">
                                <div class="info">
                                    <span>JavaScript</span>
                                    <span>50%</span>
                                </div>
                                <div class="line js"></div>
                            </div>
                            <div class="bars">
                                <div class="info">
                                    <span>React Js</span>
                                    <span>70%</span>
                                </div>
                                <div class="line react"></div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-6" >
                        <div class="column left pendidikan">
                            <h1 >Pendidikan dan skill.</h1>
                            <div class="text">
                                <p>Jadi nama ku Nandito Makdrian Poto atau biasa di panggil Nando, saya lahir pada 6 Agustus 2004 di maluk,pada 2009 saya masuk TK di usia 4 tahun dan masuk 0 besar, lalu pada 2010 saya masuk SD di usia 6 tahun dan sempat di tolak di beberapa sekolah karena umur, tahun 2016 usia 11 tahun saya masuk SMP dan lulus tahun 2019, kemudian masuk SMK tahun 2019 dan lulus tahun 2022. Saya belajar mengoding awal tahun 2022</p></div>

                        </div>

                    </div>
                </div>
            </div></div>
    );
}

export default Skillpage;