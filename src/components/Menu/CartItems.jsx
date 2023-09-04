import { useContext } from "react";
import { CartContext } from "../../context/cart";
import { RiDeleteBin6Line } from "react-icons/ri"

const CartItems = () => {
    const { cartItems, addToCart, removeFromCart } = useContext(CartContext)
    return ( 
        <>
            {cartItems.map((item, index) => (
                <div key={index} >
                    <div className='grid md:grid-cols-3 md:gap-8 gap-4 my-8'>
                        <div>
                            <img 
                                src={item.imageUrl} 
                                alt={item.name} 
                                className="rounded-md md:h-24 md:w-24 h-12 w-12 object-cover" 
                            />
                        </div>
                        <div>
                        <p>
                            {item.name}
                        </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <button
                                className="px-3 py-2 bg-green-500 text-white text-xs font-bold uppercase rounded "
                                onClick={() => {addToCart(item)}}
                            >
                                +
                            </button>
                            <p className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded ">
                                {item.quantity}
                            </p>
                            <button
                                className="p-2 text-lg text-white font-bold uppercase rounded bg-red-500 "
                                onClick={() => {removeFromCart(item)}}
                            >
                                <RiDeleteBin6Line />
                            </button>
                        </div>
                    </div>
                        
                    <hr />
                </div>
            ))}
        </>
     );
}
 
export default CartItems;