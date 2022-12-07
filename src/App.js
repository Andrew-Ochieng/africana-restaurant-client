import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import About from './pages/About';
import Home from './pages/Home';
import Menu from './pages/Menu';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import BecomeRider from './pages/rider/BecomeRider';
import PaymentAndRefunds from './pages/PaymentAndRefunds';
import TermsAndConditions from './pages/TermsAndConditions';
import UseFetch from './components/UseFetch';

function App() {
  const { data: menus } = UseFetch("/menus")
  const { data: menu_items } = UseFetch("/menu_items")


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={ <Home menus={menus} /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/menu" element={ <Menu menu_items={menu_items} /> } />
          <Route path="/contact" element={ <Contact /> } />
          <Route path="/signin" element={ <SignIn /> } />
          <Route path="/signup" element={ <SignUp /> } />

          <Route path="/termsandconditions" element={ <TermsAndConditions /> } />
          <Route path="/paymentandrefunds" element={ <PaymentAndRefunds /> } />
          <Route path="/becomerider" element={ <BecomeRider /> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
