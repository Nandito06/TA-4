import React from 'react';
import { AppContext } from '../Context/AppContext';
function Skillpage() {
    const contex = React.useContext(AppContext)
    return (
        <div className="skill">
            <div className='container text-center'>
                <div className='row aturskill'>
                    <div className='col-md-6' >
                        <h1>{contex.lang === "en" ? "SkillPage" : "Kemampuan"}</h1>
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
                            <h1 >{contex.lang==="en"?"Education and skills":"Pendidikan dan Skill"}</h1>
                            <div class="text">
                                <p>{contex.lang==="en"?"So my name is Nandito Makdrian Poto or commonly called Nando, I was born on August 6, 2004 in Maluk, in 2009 I entered kindergarten at the age of 4 years and entered the top 0, then in 2010 I entered elementary school at the age of 6 years and was rejected at the school. several schools due to age, in 2016 I was 11 years old and I entered junior high school and graduated in 2019, then entered vocational school in 2019 and graduated in 2022. I learned coding in early 2022":"Jadi nama saya Nandito Makdrian Poto atau biasa dipanggil Nando, saya lahir pada tanggal 6 Agustus 2004 di Maluku, tahun 2009 saya masuk TK pada usia 4 tahun dan masuk top 0, kemudian pada tahun 2010 saya masuk SD pada usia 6 tahun dan ditolak di sekolah. beberapa sekolah karena faktor usia, tahun 2016 saya berumur 11 tahun dan saya masuk SMP dan lulus tahun 2019, kemudian masuk SMK tahun 2019 dan lulus tahun 2022. Saya belajar coding di awal tahun 2022"}</p></div>

                        </div>

                    </div>
                </div>
            </div></div>
    );
}

export default Skillpage;