
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Nevbar/Navbar';
import Home from './Pages/Home'
import About from './Pages/About';
import Contact from './Pages/Contact';
import Product from './Pages/Product';
// import Foote from '../Components/Hero/Footer'
import Footer from './Components/Hero/Footer';

function App() {
  return (
    <div >
      <Navbar />


      <Routes>
        <Route>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/product' element={<Product />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
