import { useContext } from "react";
import { CartContext } from "../context/cart";
import { RiDeleteBin6Line } from "react-icons/ri"
import { Link } from "react-router-dom";

const Cart = ({session}) => {
    const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext)


    return ( 
        <>
            <div className="flex-col flex justify-center items-center bg-white gap-8 p-10 text-black text-sm">
                <h1 className="text-2xl font-bold text-center">Cart</h1>
                <div className="flex justify-center items-center" >
                    <div className="overflow-x-auto">
                        <table className="table border">
                            <thead>
                            <tr>
                                <th>Id</th>
                                <th>Image</th>
                                <th>Product Title</th>
                                <th>Price</th>
                                <th >Quantity</th>
                                <th>Add Qty</th>
                                <th>Delete</th>
                            </tr>
                            </thead>
                            {cartItems.map((item) => (
                                <tbody key={item.id}>
                                    <tr>
                                        <th>{item.id}</th>
                                        <td>
                                            <img 
                                                src={item.imageUrl} 
                                                alt={item.name} 
                                                className="rounded-md md:h-24 md:w-24 h-12 w-12 object-cover" 
                                            />
                                        </td>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td>
                                            <button
                                                className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                                                onClick={() => {addToCart(item)}}
                                            >
                                                +
                                            </button>
                                        </td>
                                        <td>{item.quantity}</td>
                                        <td>
                                            <button
                                                className="p-2 text-lg hover:text-white font-bold uppercase rounded hover:bg-gray-800 focus:outline-none focus:bg-gray-700"
                                                onClick={() => {removeFromCart(item)}}
                                            >
                                                <RiDeleteBin6Line />
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            ))}
                        </table>
                    </div>
                    
                </div>
                {
                    cartItems.length > 0 ? (
                    <div className="flex md:gap-8 gap-4 items-center">
                        <h1 className="text-lg font-bold">Total: Ksh {getCartTotal()}</h1>
                        <button
                        className="mt-2 px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                        onClick={() => {clearCart()}}
                        >
                            Clear cart
                        </button>
                </div>
                    ) : (
                        <h1 className="text-lg font-bold text-red-500">Your cart is empty</h1>
                    )
                }
                <div className="md:flex gap-4">
                    <Link 
                        to='/menus'
                        className="btns"
                        >
                        Continue Shopping
                    </Link>
                    <Link 
                        to='/checkout'
                        className="btns"
                        >
                        Proceed to Checkout
                    </Link>
                </div>
            </div>

        </>
     );
}
 
export default Cart;