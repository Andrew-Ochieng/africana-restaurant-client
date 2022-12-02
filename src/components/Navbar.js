import { Link } from "react-router-dom";
import { useRef } from "react";

const Navbar = () => {
    const menuRef = useRef()
    const showMenu = () => {
        menuRef.current.classList.toggle("hidden")
    }

    return ( 
        <>
            <nav className='md:py-6 py-4 bg-gray-900'>
                <div className="navbar md:flex  justify-between items-center md:mx-8 mx-4" >
                    <div className='flex items-center justify-between'>
                        <Link to='/' className='md:text-3xl text-2xl text-white uppercase font-semibold '>
                            Africana Restaurant
                        </Link>
                        <button onClick={showMenu} className="md:hidden">
                            <i className="text-xl text-gray-100 fa fa-bars"></i> 
                            {/* <i className="fa fa-times"></i> */}
                        </button>
                    </div>

                    <div ref={menuRef} className="md:flex hidden text-gray-200">
                        <ul className="md:flex items-center md:text-lg font-medium">
                            <li className='md:mx-8 md:my-0 my-2'>
                                <Link to='/about'>About</Link>
                            </li>
                            <li className='md:mx-8 md:my-0 my-2'>
                                <Link to='/menu'>Menu</Link>
                            </li>
                            <li className='md:mx-8 md:my-0 my-2'>
                                <Link to='/reviews'>Reviews</Link>
                            </li>
                            <li className='md:mx-8 md:my-0 my-2'>
                                <Link to='/contact'>Contact</Link>
                            </li>
                            <li className='md:mx-8 md:my-0 my-2 mt-4'>
                                <Link to='/reserve' className="border-2 border-green-500 px-4 py-2 hover:bg-green-500 duration-500 hover:text-300 rounded-md">Reserve Table</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        
        </>
     );
}
 
export default Navbar;