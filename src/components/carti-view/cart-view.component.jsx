import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import './cart-view.style.css'

const CartItem = ({cartItem}) => {
    const { name, quantity, imageUrl, price } = cartItem;

    // funcion para remover el item del carrito consultando al contexto
    const { clearItemFromCart} = useContext(CartContext);
    const clearItemHandler = () => clearItemFromCart(cartItem);

    return (
        <div className='cart-item-container'>
            <img src={imageUrl} alt={`${name}`}/>
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'>{quantity} x ${price}</span>
                <span className='remove-button' onClick={clearItemHandler}>Quitar</span>
            </div>
        </div>
    )
}

export default CartItem;