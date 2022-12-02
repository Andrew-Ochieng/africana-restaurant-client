import { Link } from "react-router-dom";
import { useRef } from "react";

const Navbar = () => {
    const menuRef = useRef()
    const showMenu = () => {
        menuRef.current.classList.toggle("hidden")
    }

    return ( 
        <>
            <nav className='md:py-6 py-4 bg-yellow-500'>
                <div className="navbar md:flex  justify-between items-center md:mx-8 mx-4" >
                    <div className='flex items-center justify-between'>
                        <Link to='/' className='md:text-3xl text-2xl font-semibold '>
                            <span className="font-extralight">
                                Afrikaan
                            </span> Eats
                        </Link>
                        <button onClick={showMenu} className="md:hidden">
                            <i className="text-xl fa fa-bars"></i> 
                            {/* <i className="fa fa-times"></i> */}
                        </button>
                    </div>

                    <div ref={menuRef} className="md:flex hidden ">
                        <ul className="md:flex items-center md:text-lg font-medium">
                            <li className='md:mx-8 mx-2 md:my-0 my-2'>
                                <Link to='/about'>About</Link>
                            </li>
                            <li className='md:mx-8 mx-2 md:my-0 my-2'>
                                <Link to='/menu'>Menu</Link>
                            </li>
                            <li className='md:mx-8 mx-2 md:my-0 my-2'>
                                <Link to='/contact'>Contact</Link>
                            </li>
                            <li className='md:mx-3 mx-1 md:my-0 my-2 mt-4'>
                                <Link to='/signin' className="border-4 border-green-500 px-4 py-2 hover:bg-green-500 duration-500 hover:text-300 rounded-md">Order</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        
        </>
     );
}
 
export default Navbar;