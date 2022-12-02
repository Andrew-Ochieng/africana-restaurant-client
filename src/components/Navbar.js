const Navbar = () => {
    return ( 
        <>
            <nav className='md:py-6 py-4'>
                <div className="navbar md:flex  justify-between items-center " >
                    <div className='flex items-center justify-between'>
                        <Link to='/' className='md:text-3xl text-2xl uppercase font-semibold '>
                            <img className="md:w-32 w-28" src={logo} alt="Logo.." />
                        </Link>
                        <button onClick={showMenu} className="md:hidden">
                            <i className="text-xl fa fa-bars"></i> 
                            {/* <i className="fa fa-times"></i> */}
                        </button>
                    </div>

                    <div ref={menuRef} className="md:flex hidden ">
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
                            <li className='md:mx-8 md:my-0 my-2'>
                                <Link to='/reserve' className="border-2 border-green-400 px-4 py-1 hover:bg-green-400 duration-500 hover:text-white rounded-md">Reserve Table</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        
        </>
     );
}
 
export default Navbar;