import { Route, Routes } from 'react-router-dom'
import './App.css';
import React, { useState } from 'react';
//Import Halamam
// import Home from './component/Home';
/// import Skillpage from './component/Skillpage';
// import Blog from './component/Blog';
import Profilelengkap from './hal tambahan/profileLengkap';
import Footer from './component/Footer';
import Navbar from './Boostrap/Navbar';
import { AppContext } from './Context/AppContext';

function App() {
  const [bahasa, setBahasa] = useState('en');
  const contex = React.useContext(AppContext)
  return (

    <div>
      <AppContext.Provider
        value={{
          lang: bahasa,
          onchangebahasa: setBahasa
        }}>
        <Navbar />

      


      <Routes>
        <Route path="/about/biodataLengkap" element={<Profilelengkap />} />
      </Routes>
      <Footer />
      </AppContext.Provider>
    </div>

  );
}

export default App;
