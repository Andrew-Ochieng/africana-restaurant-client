// import { Link, useNavigate } from "react-router-dom";
// import { useRef } from "react";
// import { AiOutlineShoppingCart } from "react-icons/ai"
// import { GoThreeBars } from "react-icons/go"

// const Navbar = () => {
//     const menuRef = useRef()
//     const showMenu = () => {
//         menuRef.current.classList.toggle("hidden")
//     }

//     const navigate = useNavigate()

//     const handleLogout = () => {
//         navigate("/login")
//     }

//     return ( 
//         <>
//             <nav className='md:py-6 py-4 bg-yellow-500'>
//                 <div className="navbar md:flex  justify-around items-center md:mx-8 mx-4" >
//                     <div className='flex items-center justify-between'>
//                         <Link to='/' className='md:text-2xl text-xl font-semibold uppercase'>
//                             <span className="font-[Merienda] font-extrabold lowercase md:text-3xl text-2xl">
//                                 Afrikaan 
//                             </span> 
//                             <span className="pl-2 text-white font-bold font-[Roboto Condensed]">Restaurant</span>
//                         </Link>
//                         <button onClick={showMenu} className="md:hidden">
//                             <GoThreeBars />
//                         </button>
//                     </div>

//                     <div ref={menuRef} className="md:flex hidden ">
//                         <ul className="md:flex items-center md:text-lg font-medium">
//                             <li className='md:mx-6 mx-2 md:my-0 my-2 hover:text-white duration-500'>
//                                 <Link to='/menus'>Menu</Link>
//                             </li>
//                             <li className='md:mx-6 mx-2 md:my-0 my-2 hover:text-white duration-500'>
//                                 <Link to='/about'>About</Link>
//                             </li>
//                             <li className='md:mx-6 mx-2 md:my-0 my-2 hover:text-white duration-500'>
//                                 <Link to='/contact'>Contact</Link>
//                             </li>
//                             <li className='md:mx-6 mx-2 md:my-0 my-2 hover:text-white duration-500 '>
//                                 <Link to='/' className="md:text-4xl text-3xl text-gray-800 hover:text-green-400 ">
//                                         <AiOutlineShoppingCart />
//                                 </Link>
//                             </li>
//                             <li className='md:my-0 my-2 p-3 rounded-full'>
//                                 <Link 
//                                     to='/logout' 
//                                     onClick={() => handleLogout()}
//                                     className="md:text-xl text-lg text-gray-100 bg-red-400 py-2 px-3 rounded-lg"
//                                     >
//                                     Logout
//                                 </Link>
//                             </li>
                            
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </>
//      );
// }
 
// export default Navbar;

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { Link } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const menus = [
        {name: "Menu", route: "/menus"},
        {name: "About", route: "/about"},
        {name: "Contact", route: "/contact"},
    ]

    return ( 
        <>
            <nav className='md:px-32 px-4 py-4 top-0 left-0 sticky z-[100] bg-yellow-500 opacity-90 shadow-xl'>
                <div className='md:flex items-center justify-between'>
                    <div className="flex justify-between items-center">
                        <Link to='/' className='md:text-2xl text-lg uppercase font-semibold '>
                            Afrikaan Restaurant
                        </Link>
                        
                        <button onClick={() => setOpen((prev) => !prev)} className="md:hidden text-xl text-gray-800">
                            {open ? <FaTimes/> : <FaBars/>}
                        </button>
                    </div>
                    
                    <div className='md:flex hidden text-gray-800'>
                        <ul className="md:flex items-center md:text-lg font-medium">
                            {menus.map((item, index) => (
                                <div key={index}>
                                    <li className='md:mx-3 md:my-0 my-4 '>
                                        <Link to={item.route}>
                                            {item.name}
                                        </Link>
                                    </li>
                                </div>
                            ))}
                            <li className='md:mx-3 md:my-0 my-4'>
                                <button className="md:text-4xl text-3xl text-gray-800 hover:text-white ">
                                   <AiOutlineShoppingCart />
                                </button>
                            </li>
                            <li className='md:my-0 my-2 p-3 rounded-full'>
                                <Link to='/logout' className="md:text-xl text-lg text-gray-100 bg-red-400 py-2 px-3 rounded-lg">
                                    Logout
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={`${open ? "left-0 " : "left-[-100%]"} sm:hidden absolute top-0 right-0 bottom-0  space-y-8 py-6 px-8 w-[85%] h-screen duration-300 ease-in-out bg-yellow-500`}>
                    <ul className="flex flex-col justify-center mt-8 text-base font-medium">
                            <li 
                                className='md:mx-3 md:my-0 my-4' 
                                onClick={() => setOpen((prev) => !prev)}
                            >
                                <Link to='/'>
                                    Home
                                </Link>
                            </li>
                            {menus.map((item, index) => (
                                <div key={index}>
                                    <li className='md:mx-3 md:my-0 my-4 '>
                                        <Link to={item.route}>
                                            {item.name}
                                        </Link>
                                    </li>
                                </div>
                            ))}
                            <li className='md:mx-3 md:my-0 my-4'>
                                <Link to='/' className="md:text-4xl text-3xl text-gray-800 hover:text-green-400 ">
                                   <AiOutlineShoppingCart />
                              </Link>
                            </li>
                            <li className='md:my-0 my-2 p-3 rounded-full'>
                                <Link to='/logout' className="md:text-xl text-lg text-gray-100 bg-red-400 py-2 px-3 rounded-lg">
                                    Logout
                                </Link>
                            </li>
                    </ul>
                </div>
            </nav>
        </>
     );
}
 
export default Navbar;
