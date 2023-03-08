import { useDispatch } from 'react-redux';
import { removeItemFromCart } from '../../Redux/cartSlice';

const CartItem = ({cartItem}) => {

    const dispatch = useDispatch();
    return(
        <div>
            <p>{cartItem.name}</p>
            <p>Price: $ {cartItem.price * cartItem.quantity}</p>
            <p>{cartItem.quantity} portion(s)</p>
            <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
            <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" alt='cartDelete' /> 
            </span>
        </div>
    )
}
export default CartItem;