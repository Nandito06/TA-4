import { Route, Routes } from 'react-router-dom'
import './App.css';

//Import Halamam
// import Home from './component/Home';
/// import Skillpage from './component/Skillpage';
// import Blog from './component/Blog';
import Profilelengkap from './hal tambahan/profileLengkap';

import Navbar from './Boostrap/Navbar';
function App() {
  return (

    <div>
      <Navbar />
      <Routes>
        <Route path="/about/biodataLengkap" element={<Profilelengkap />} />
      </Routes>

    </div>

  );
}

export default App;
