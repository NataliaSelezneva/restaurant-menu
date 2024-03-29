import { useSelector } from "react-redux";
import { getCartItem, getTotalPrice } from "../../Redux/cartSlice";
import CartItem from "./CartItem";

const Cart = () =>{

    const cartItems = useSelector(getCartItem);
    const totalPrice = useSelector(getTotalPrice);

    return(
        <div>
            <img className="cart-icon" src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/000000/external-shopping-cart-cyber-monday-xnimrodx-lineal-color-xnimrodx.png" alt="cart" /> 
            <h3 className="total">Total: $ {totalPrice}</h3>
            {cartItems.map((cartItem) => <CartItem cartItem={cartItem} key={cartItem.id} /> )}
        </div>
    )
}
export default Cart;