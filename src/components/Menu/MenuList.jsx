import { Link } from "react-router-dom";
import { HashLoader } from "react-spinners";
import { useContext } from 'react'
import { CartContext } from "../../context/cart";


const MenuList = ({filteredMenus, loading, error}) => {
    const { addToCart } = useContext(CartContext)


    return ( 
        <>
            <div className="md:m-8 m-4">
                { error && <h4 className="text-red-500">{ error }</h4>}
                {loading ? (
                    <div className="flex items-center justify-center md:my-64 my-16">
                        <HashLoader 
                            color="#36d7b7" 
                            loading={loading}
                            size={50}
                            aria-label="Loading Content..."
                            data-testid="loader"
                        />
                    </div>
                ) : (
                    <div className="grid md:grid-cols-4 gap-4"> 
                        {filteredMenus && filteredMenus.map((menuItem, index) => (
                            <div key={index} className=" py-2 px-3 rounded-xl border space-y-3">
                                <Link to={`/menu_item/${menuItem.id}`}>
                                    <img className="rounded-xl w-full h-40 md:h-44 hover:scale-105 duration-500 ease-in-out object-cover" src={menuItem.imageUrl} alt="" />
                                    <h3 className="text-gray-700 md:text-xl text-lg font-semibold mt-3">{menuItem.name}</h3>
                                </Link>
                                <div className="flex justify-between items-center">
                                    <h4 className="text-green-400 font-light ">Ksh {menuItem.price }</h4>
                                    <button 
                                        onClick={() => addToCart(menuItem)}
                                        className="py-1 px-2 rounded-md text-sm bg-green-500 text-white font-semibold"
                                        >
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                
            </div>
        </>
     );
}
 
export default MenuList;