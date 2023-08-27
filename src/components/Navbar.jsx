import { useState } from "react";
import {  FaRegTimesCircle } from "react-icons/fa"
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai"
import { BiUserCircle } from "react-icons/bi"
import { HiMenuAlt2 } from "react-icons/hi"
import { Link } from "react-router-dom";
import logo from "../assets/dish.png"

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const menus = [
        {name: "Menu", route: "/menus"},
        {name: "Cart", route: "/cart"},
        {name: "About", route: "/about"},
        {name: "Contact", route: "/contact"},
    ]

    return ( 
        <>
            <nav className='md:px-32 px-4  py-2 top-0 left-0 sticky z-[100] bg-yellow-500 opacity-95 shadow-xl'>
                <div className='md:flex items-center justify-between'>
                    <div className="flex justify-between items-center">
                        <Link to='/' className='md:text-lg text-sm font-medium '>
                            <div className="flex flex-col items-center">
                                <img className="md:w-12 w-8" src={logo} alt="" />
                                Kienyeji Foods
                            </div>
                        </Link>

                        <div className="flex gap-2">
                            <div>
                                <ul className="md:hidden flex text-gray-800 text-2xl gap-3">
                                    <li className="hover:text-white cursor-pointer">
                                        <AiOutlineShoppingCart />
                                    </li>
                                    <li className="hover:text-white cursor-pointer">
                                        <BiUserCircle />
                                    </li>
                                </ul>
                            </div>
                            <button onClick={() => setOpen((prev) => !prev)} className="md:hidden text-2xl text-gray-200">
                                {open ? <FaRegTimesCircle/> : <HiMenuAlt2/>}
                            </button>
                        </div>
                        
                        
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
                        </ul>
                    </div>

                    <div>
                        <ul className="md:flex hidden text-gray-800 text-2xl gap-4">
                            <li className="hover:text-white cursor-pointer">
                                <AiOutlineHeart />
                            </li>
                            <li className="hover:text-white cursor-pointer">
                                <AiOutlineShoppingCart />
                            </li>
                            <li className="hover:text-white cursor-pointer">
                                <BiUserCircle />
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
                    </ul>
                </div>
            </nav>
        </>
     );
}
 
export default Navbar;
