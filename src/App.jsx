import { Route, Routes } from 'react-router-dom'
import './App.css';

//Import Halamam
// import Home from './component/Home';
/// import Skillpage from './component/Skillpage';
// import Blog from './component/Blog';
import Profilelengkap from './hal tambahan/profileLengkap';
import Footer from './component/Footer';
import Navbar from './Boostrap/Navbar';
function App() {
  return (

    <div>
      <Navbar />
      <Routes>
        <Route path="/about/biodataLengkap" element={<Profilelengkap />} />
      </Routes>
<Footer />
    </div>

  );
}

export default App;
