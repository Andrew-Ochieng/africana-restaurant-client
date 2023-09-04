import { useContext } from "react";
import { CartContext } from "../context/cart";
import { Link } from "react-router-dom";
import CartItems from "./Menu/CartItems";

const Cart = () => {
    const { cartItems, clearCart, getCartTotal } = useContext(CartContext)

    // const let totalItems = new Map().set('a', 1).set('b', 2);
    // const  result = Array.from(myMap).map(([name, value]) => ({name, value}))
    const shippingFee = 200
    return ( 
        <>
            <div className="p-10 ">
                <h1 className="text-2xl font-bold text-center">Cart</h1>
                <div className="md:flex flex-row xl:gap-16 md:gap-8 gap-4">
                    <div className="md:basis-2/3 basis-0">
                        <CartItems />
                    </div>

                    <div className="md:basis-1/3 ">
                        <div className="bg-green-200 p-4 rounded-lg space-y-2 font-semibold text-gray-700">
                            <h3>Cart Summary</h3>
                            <div className="flex item-center justify-between">
                                Subtotal: 
                                <span>Ksh {getCartTotal()}</span>
                            </div>
                            <div className="flex item-center justify-between">
                                Shipping Fee: 
                                <span>Ksh {shippingFee}</span>
                            </div>
                            <div className="flex item-center justify-between">
                                Total Amount: 
                                <span>Ksh {getCartTotal() + shippingFee}</span>
                            </div>
                            <p>
                                <Link to='/checkout' className="btns">
                                    Proceed to Checkout
                                </Link>
                            </p>
                        </div>
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