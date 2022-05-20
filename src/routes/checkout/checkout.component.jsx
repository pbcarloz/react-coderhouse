import { useContext } from 'react';
import CheckOutItem from '../../components/checkout-item/checkout.-item.component';
import { CartContext } from '../../context/cart.context';

import './checkout.styles.css'

const CheckOut = () => {
    const {cartItems, cartTotal } = useContext(CartContext);

    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Producto</span>
                </div>
                <div className='header-block'>
                    <span>Descripcion</span>
                </div>
                <div className='header-block'>
                    <span>Cantidad</span>
                </div>
                <div className='header-block'>
                    <span>Precio</span>
                </div>
                <div className='header-block'>
                    <span>Remover</span>
                </div>
            </div>
            {
                cartItems.map((cartItem) => (
                        <CheckOutItem cartItem={cartItem} />
                ))
            }
            <span className='total'>Total: $ {cartTotal}</span>
        </div>
    )
}

export default CheckOut;