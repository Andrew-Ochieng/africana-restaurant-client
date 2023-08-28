import { useContext } from "react";
import { CartContext } from "../Context/cart";

const Cart = () => {
    const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext)


    return ( 
        <>
            <div>
                {cartItems.map((item) => (
                    <div>
                        <div>
                            <img src={item.imageUrl} alt="" />
                        </div>
                        <div>
                            <h3>{item.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </>
     );
}
 
export default Cart;