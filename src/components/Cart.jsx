import { useContext } from "react";
import { CartContext } from "../context/cart";
import { Link } from "react-router-dom";
import CartItems from "./Menu/CartItems";

const Cart = () => {
    const { cartItems, clearCart, getCartTotal } = useContext(CartContext)


    return ( 
        <>
            <div className="p-10 ">
                <h1 className="text-2xl font-bold text-center">Cart</h1>
                <div className="md:flex flex-row xl:gap-16 md:gap-8 gap-4">
                    <div className="md:basis-2/3 basis-0">
                        <CartItems />
                    </div>

                    <div className="md:basis-1/3 basis-0 md:mt-0 mt-12 border p-4 rounded">
                        <h3>Order Summary</h3>
                        <div>
                            <p>Total Quantity: {cartItems.reduce((item) => (
                                <p>{item.quantity}</p>
                            ))}</p>
                            <p>Subtotal:</p>
                        </div>
                        <p>
                            <Link to='/checkout' className="btns">
                                Proceed to Checkout
                            </Link>
                        </p>
                    </div>
                </div>
                
                {
                    cartItems.length > 0 ? (
                    <div className="flex md:gap-8 gap-4 items-center md:mt-8 mt-4">
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
            </div>

        </>
     );
}
 
export default Cart;