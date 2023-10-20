import { useState } from "react";
import { addItemToCart, getCartItem, updateQuantity } from "../../Redux/cartSlice";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { useDispatch, useSelector } from "react-redux";

const Dish = ({dish}) => {
const [quantity, setQuantity] = useState(1);
const dispatch = useDispatch();

const cartItems = useSelector(getCartItem);
const dishInCart = cartItems.some(item => item.id === dish.id);

const handleClick = () => {
    dishInCart ? dispatch(updateQuantity({dish, quantity})) : dispatch(addItemToCart({dish, quantity}))
}

    return(
        <div>
            <img src={`${dish.img}.jpg`} alt='food' />
            <h2>{dish.name}</h2>
            <p>$ {dish.price}</p>
            <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
            <button className="burronAddCart" onClick={handleClick}>Add to cart</button>
        </div>
    )
}
export default Dish;