import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  { SkeletonTheme } from 'react-loading-skeleton';
import Contact from './pages/Contact';
import About from './pages/About';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Login from './pages/LogIn';
import SignUp from './pages/SignUp';
import MenuItem from './components/Menu/MenuItem';
import { useState, useEffect } from 'react';
import { supabase } from './supabase/supabaseConfig';
import AddMenus from './pages/admin/AddMenus';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import Cart from './components/Cart';
import Checkout from './components/Menu/Checkout';
import { CartProvider } from './context/cart';

function App() {
  const [menus, setMenus] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [session, setSession] = useState(null)

  useEffect(() => {
    const getMenuItems = async () => {
      const { data, error } = await supabase
        .from("menus")
        .select()
        .order('id', {ascending: false})
      if (data) {
        setMenus(data)
        setLoading(false)
      }

      if (error) {
        setLoading(false)
        setError(error.message)
        console.log(error)
      }
    }

    getMenuItems()
  }, [])


  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  // console.log(session)

  return (
    <div className="App">
      <SkeletonTheme baseColor="#313131" highlightColor="#525252">
        <BrowserRouter>
          <ScrollToTop />
          <Navbar session={session} />
          <Routes>
            <Route path="/" element={ <Home menus={menus} loading={loading} error={error}  /> } />
            <Route path='/cart' element={ <Cart session={session} /> } />
            <Route path="/login" element={ <Login /> } />
            <Route path="/signup" element={ <SignUp /> } />
            <Route path="/about" element={ <About /> } />
            <Route path="/menus" element={ <Menu menus={menus} loading={loading} error={error} /> } />
            <Route path="/contact" element={ <Contact /> } />
            <Route path="/menu_item/:id" element={ <MenuItem menus={menus} loading={loading} error={error} /> } />

            <Route path='/checkout' element={ <Checkout /> } />

            <Route path='/admin/add-menu' element={ <AddMenus /> } />
          </Routes>
          <Footer />
        </BrowserRouter>
      </SkeletonTheme>
    </div>
  );
}

export default App;
