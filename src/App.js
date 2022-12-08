import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Footer from './components/Footer';
// import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import About from './pages/About';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Login from './pages/LogIn';
import SignUp from './pages/SignUp';
import UseFetch from './components/UseFetch';
import { useState, useEffect } from 'react';
import Order from './components/Order';

function App() {
  const { data: menus, loading, error } = UseFetch("https://afrikaan-restaurant-production.up.railway.app/menus")
  const [client, setClient] = useState(null)

  useEffect(() => {
    fetch("https://afrikaan-restaurant-production.up.railway.app/me")
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((client) => setClient(client));
      }
    });
  }, []);

  console.log(client)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/logout" element={ <Login /> } />
          <Route path="/login" element={ <Login setClient={setClient} /> } />
          <Route path="/signup" element={ <SignUp setClient={setClient} /> } />
          <Route path="/" element={ <Home menus={menus} loading={loading} error={error} client={client} setClient={setClient} /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/menu" element={ <Menu menus={menus} loading={loading} error={error} /> } />
          <Route path="/contact" element={ <Contact /> } />
          <Route path="/menu_items/:id" element={ <Order menus={menus} loading={loading} /> } />

          <Route path="/termsandconditions" element={ <TermsAndConditions /> } />
          <Route path="/paymentandrefunds" element={ <PaymentAndRefunds /> } />
          <Route path="/becomerider" element={ <BecomeRider /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
