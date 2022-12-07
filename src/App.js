import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import About from './pages/About';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import BecomeRider from './pages/rider/BecomeRider';
import PaymentAndRefunds from './pages/PaymentAndRefunds';
import TermsAndConditions from './pages/TermsAndConditions';
import UseFetch from './components/UseFetch';
import { useState, useEffect } from 'react';

function App() {
  const { data: menus, loading, error } = UseFetch("/menus")
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          // console.log(user)
          setUser(user)
        });
      }
    });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar  />
        <Routes>
          <Route path="/" element={ <Home menus={menus} loading={loading} error={error} /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/menu" element={ <Menu menus={menus} loading={loading} error={error} /> } />
          <Route path="/contact" element={ <Contact /> } />
          <Route path="/login" element={ <Login setUser={setUser} /> } />
          <Route path="/signup" element={ <SignUp setUser={setUser} /> } />

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
