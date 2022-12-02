import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Reviews from './pages/Reviews';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={ <Home /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/menu" element={ <Menu /> } />
          <Route path="/reviews" element={ <Reviews /> } />
          <Route path="/contact" element={ <Contact /> } />
          <Route path="/reserve" element={ <Reviews />   } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
