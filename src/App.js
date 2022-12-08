import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("https://afrikaan-restaurant-production.up.railway.app/me")
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => setUser(user));
      }
    });
  }, []);

  console.log(user)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/logout" element={ <Login /> } />
          <Route path="/login" element={ <Login setUser={setUser} /> } />
          <Route path="/signup" element={ <SignUp setUser={setUser} /> } />
          <Route path="/" element={ <Home menus={menus} loading={loading} error={error} user={user} setUser={setUser} /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/menu" element={ <Menu menus={menus} loading={loading} error={error} /> } />
          <Route path="/contact" element={ <Contact /> } />
          <Route path="/menu_items/:id" element={ <Order menus={menus} loading={loading} /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
