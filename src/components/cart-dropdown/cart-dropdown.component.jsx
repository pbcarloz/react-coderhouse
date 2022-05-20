import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../context/cart.context';

import CartItem from '../carti-view/cart-view.component';

import './cart-dropdown.styles.css'

const CartDropdown = () => {

    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckOutHandler = () => {
        navigate('/carrito')
    }

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map(item => <CartItem key={item.id} cartItem={item} />)}
            </div>
                <button onClick={goToCheckOutHandler} >Ir al Carrito</button>
        </div>
    )
};

export default CartDropdown;