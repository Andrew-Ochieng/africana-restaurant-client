import { useContext, useState } from "react";
import {  FaRegTimesCircle } from "react-icons/fa"
import { AiOutlineHeart } from "react-icons/ai"
import { MdOutlineShoppingCart } from "react-icons/md"
import { BiUserCircle } from "react-icons/bi"
import { HiMenuAlt2 } from "react-icons/hi"
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/dish.png"
import { CartContext } from "../context/cart";
import { supabase } from "../supabase/supabaseConfig";
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const Navbar = ({session}) => {
    const { cartItems } = useContext(CartContext)
    const navigate = useNavigate()

    const [open, setOpen] = useState(false)

    const menus = [
        {name: "Menu", route: "/menus"},
        {name: "About", route: "/about"},
        {name: "Contact", route: "/contact"},
    ]

    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut()
        
        toast.error('Logout was succesful')
        setOpen((prev) => !prev)

        setTimeout(() => {
            navigate('/')
        }, 2000);
    }

    const handleCartNavigate = () => {
        if (session) {
            navigate('/cart')
        } else {
            navigate('/login')
        }
    }

    return ( 
        <>
            <ToastContainer 
                position = 'top-center'
                autoClose = {2000}
                hideProgressBar = {true}
                closeOnClick = {true}
                pauseOnHover = {true}
                draggable = {true}
                progress = {undefined}
                theme= 'colored'
            />
            <nav className='md:px-32 px-4  py-2 top-0 left-0 sticky z-[100] bg-yellow-500 opacity-95 shadow-xl'>
                <div className='md:flex items-center justify-between'>
                    <div className="flex justify-between items-center">
                        <Link to='/' className='md:text-lg text-sm font-medium '>
                            <div className="flex flex-col items-center">
                                <img className="md:w-12 w-8" src={logo} alt="" />
                                
                                Afrikaan Eatery
                            </div>
                        </Link>

                        <div className="flex gap-2">
                            <div>
                                <ul className="md:hidden flex text-gray-800 text-2xl gap-3">
                                    <li 
                                        onClick={handleCartNavigate}
                                        className="flex hover:text-white cursor-pointer">
                                        <MdOutlineShoppingCart />
                                        <p className="text-xs bg-green-500 text-white font-medium rounded-full w-4 h-4 flex items-center justify-center -ml-1 -mt-1">
                                            <small>{session ? cartItems.length : '0'}</small>
                                        </p>
                                    </li>
                                    <li className="hover:text-white cursor-pointer">
                                        <Link to='/login'>
                                            <BiUserCircle />
                                        </Link>
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
                            {session ? (
                                <li 
                                    onClick={handleLogout}
                                    className="md:mx-3 md:my-0 my-4 text-white hover:text-red-500 cursor-pointer"
                                    >
                                    Logout
                                </li>
                            ) : <li></li>}
                        </ul>
                    </div>

                    <div>
                        <ul className="md:flex hidden text-gray-800 text-2xl gap-4">
                            <li className="hover:text-white cursor-pointer">
                                <AiOutlineHeart />
                            </li>
                            <li 
                                onClick={handleCartNavigate}
                                className="flex hover:text-white cursor-pointer">
                                <MdOutlineShoppingCart />
                                <p className="text-xs bg-green-500 text-white font-medium rounded-full w-4 h-4 flex items-center justify-center -ml-1 -mt-1">
                                    <small>{session ? cartItems.length : '0'}</small>
                                </p>
                            </li>
                            <li className="hover:text-white cursor-pointer">
                                <Link to='/login'>
                                    <BiUserCircle />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={`${open ? "left-0 " : "left-[-100%]"} sm:hidden absolute top-0 right-0 bottom-0  space-y-8 py-6 px-8 w-[85%] h-screen duration-500 ease-in-out bg-yellow-500`}>
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
                                <li 
                                    onClick={() => setOpen((prev) => !prev)}
                                    className='md:mx-3 md:my-0 my-4 '
                                >
                                    <Link to={item.route}>
                                        {item.name}
                                    </Link>
                                </li>
                            </div>
                        ))}
                        {session ? (
                            <li 
                                onClick={handleLogout}
                                className="md:mx-3 md:my-0 my-4 text-white hover:text-red-500 cursor-pointer"
                                >
                                Logout
                            </li>
                        ) : <li></li>}
                    </ul>
                </div>
            </nav>
        </>
     );
}
 
export default Navbar;
