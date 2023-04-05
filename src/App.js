import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import About from './pages/About';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Login from './pages/LogIn';
import SignUp from './pages/SignUp';
import MenuItem from './components/MenuItem';
import UseFetch from './components/UseFetch';
import { useState, useEffect } from 'react';

function App() {
  const { data: menus, loading, error } = UseFetch("http://localhost:4000/menus")
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("http://localhost:4000/me")
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
          <Route path="/login" element={ <Login /> } />
          <Route path="/signup" element={ <SignUp /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/menu" element={ <Menu menus={menus} loading={loading} error={error} /> } />
          <Route path="/contact" element={ <Contact /> } />
          <Route path="/:id" element={ <MenuItem menus={menus} loading={loading} error={error} /> } />
          <Route path="/" element={ <Home menus={menus} loading={loading} error={error} user={user} setUser={setUser} /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
