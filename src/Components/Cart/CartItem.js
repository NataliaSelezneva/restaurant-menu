import { useDispatch } from 'react-redux';
import { removeItemFromCart } from '../../Redux/cartSlice';
import icon from './delete.png'

const CartItem = ({cartItem}) => {

    const dispatch = useDispatch();
    return(
        <div>
            <p>{cartItem.name}</p>
            <p>Price: $ {cartItem.price * cartItem.quantity}</p>
            <p>{cartItem.quantity} portion(s)</p>
            <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
            <img className="icon" src={icon} alt='cartDelete' /> 
            </span>
        </div>
    )
}
export default CartItem;