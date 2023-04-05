import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai"
import { GoThreeBars } from "react-icons/go"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../firebase/config";

const Navbar = () => {
    const menuRef = useRef()
    const showMenu = () => {
        menuRef.current.classList.toggle("hidden")
    }

    const navigate = useNavigate()
    const [user, loading, error] = useAuthState(auth)

    const handleLogout = () => {
        auth.signOut();
        navigate("/login")
    }

    // function handleLogoutClick() {
    //     fetch("http://localhost:4000/logout", { method: "DELETE" })
    //     .then((res) => {
    //       if (res.ok) {
    //         setUser(null);
    //         navigate('/login')
    //         localStorage.removeItem("me")
    //       }
    //     });
    // }

    return ( 
        <>
            <nav className='md:py-6 py-4 bg-yellow-500'>
                <div className="navbar md:flex  justify-around items-center md:mx-8 mx-4" >
                    <div className='flex items-center justify-between'>
                        <Link to='/' className='md:text-2xl text-xl font-semibold uppercase'>
                            <span className="font-[Merienda] font-extrabold lowercase md:text-3xl text-2xl">
                                Afrikaan 
                            </span> 
                            <span className="pl-2 text-white font-bold font-[Roboto Condensed]">Restaurant</span>
                        </Link>
                        <button onClick={showMenu} className="md:hidden">
                            <GoThreeBars />
                        </button>
                    </div>

                    <div ref={menuRef} className="md:flex hidden ">
                        <ul className="md:flex items-center md:text-lg font-medium">
                            <li className='md:mx-6 mx-2 md:my-0 my-2 hover:text-white duration-500'>
                                <Link to='/menu'>Menu</Link>
                            </li>
                            <li className='md:mx-6 mx-2 md:my-0 my-2 hover:text-white duration-500'>
                                <Link to='/about'>About</Link>
                            </li>
                            <li className='md:mx-6 mx-2 md:my-0 my-2 hover:text-white duration-500'>
                                <Link to='/contact'>Contact</Link>
                            </li>
                            <li className='md:mx-6 mx-2 md:my-0 my-2 hover:text-white duration-500 '>
                                <Link to='/' className="md:text-4xl text-3xl text-gray-800 hover:text-green-400 ">
                                        <AiOutlineShoppingCart />
                                </Link>
                            </li>
                            <li className='md:my-0 my-2 p-3 rounded-full'>
                                <Link 
                                    to='/logout' 
                                    onClick={() => handleLogout()}
                                    className="md:text-xl text-lg text-gray-100 bg-red-400 py-2 px-3 rounded-lg"
                                    >
                                    Logout
                                </Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </>
     );
}
 
export default Navbar;


