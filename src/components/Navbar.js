import { Link } from "react-router-dom";
import { useRef } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai"
import { FaSignInAlt } from "react-icons/fa"
import { AiOutlineUserAdd } from "react-icons/ai"


const Navbar = () => {
    const menuRef = useRef()
    const showMenu = () => {
        menuRef.current.classList.toggle("hidden")
    }

    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
      }

    return ( 
        <>
            <nav className='md:py-6 py-4 bg-yellow-500'>
                <div className="navbar md:flex  justify-around items-center md:mx-8 mx-4" >
                    <div className='flex items-center justify-between'>
                        <Link to='/' className='md:text-2xl text-xl font-semibold uppercase'>
                            <span className="font-extralight lowercase md:text-3xl text-2xl">
                                Afrikaan
                            </span> Restaurant
                        </Link>
                        <button onClick={showMenu} className="md:hidden">
                            <i className="text-xl fa fa-bars"></i> 
                            {/* <i className="fa fa-times"></i> */}
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
                            <li className='md:mx-6 mx-2 md:my-0 my-2 hover:text-white duration-500 md:text-2xl '>
                            <Link to='' className="md:text-2xl text-xl text-gray-800 hover:text-green-400 ">
                                    <AiOutlineShoppingCart />
                                </Link>
                            </li>
                            <div>
                                {user ? (
                                    <button 
                                        onClick={handleLogoutClick}
                                        className="md:mx-6 mx-2 md:my-0 my-2 px-4 py-2 hover:text-white duration-500"
                                        >
                                        Logout
                                    </button>
                                    ) : (
                                    <>
                                        <ul>
                                            <li className='md:mx-3 mx-1 md:my-0 my-2 p-3 rounded-full'>
                                                <Link to='/signup' className="md:text-3xl text-xl text-white hover:text-green-400 ">
                                                    <AiOutlineUserAdd />
                                                </Link>
                                            </li>
                                            <li className='md:mx-3 mx-1 md:my-0 my-2 p-3 rounded-full'>
                                                <Link to='/login' className="md:text-2xl text-xl text-white hover:text-green-400 ">
                                                    <FaSignInAlt />
                                                </Link>
                                            </li>
                                        </ul>
                                    </>
                                )}
                            </div>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        
        </>
     );
}
 
export default Navbar;