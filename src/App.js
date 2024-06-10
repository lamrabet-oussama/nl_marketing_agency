import './App.css';
import { HashRouter,Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import { Home } from './components/pages/Home'
import { Contact } from './components/pages/Contact'
import { Realisations } from './components/pages/Realisations';
import Headroom from 'react-headroom';
function App() {
  return (
    <div className='font-inter right-0 left-0 w-full p-0 m-0 '>
      <Headroom className=' w-full fixed z-20 '>
        <Navbar />

      </Headroom>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/realisations" element={<Realisations />} />

      </Routes>

      {/*Footer*/}
      <Footer />
    </div>
  )
}

export default App;
