
const ChangeQuantity = ({quantity, setQuantity}) => {

    const addQuantity = () => {
        const newQuntity = quantity + 1;
        setQuantity(newQuntity)
    }

    const removeQuantity = () => {
        if(quantity <= 1) return;
        const newQuntity = quantity - 1;
        setQuantity(newQuntity)
    }

    return(
        <div>
            <button className="button" onClick={addQuantity}>+</button>
            <span>{quantity}</span>
            <button className="button" onClick={removeQuantity}>-</button>
        </div>
    )
}
export default ChangeQuantity;