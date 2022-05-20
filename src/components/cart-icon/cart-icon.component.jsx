import { useContext } from 'react'

import { ReactComponent as CartWidget } from '../../assets/shopping-bag.svg'

import { CartContext } from '../../context/cart.context'

import './cart-icon.style.css'


const CartIcon = () => {

    const{isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
    
    // si se da click, se cambia isCartOpen a False
    const handleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <div className='cart-icon-container' onClick={handleIsCartOpen}>
            <CartWidget className='shopping-icon' />
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}

export default CartIcon;