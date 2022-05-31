import { useContext} from 'react';
import { CartContext } from '../../context/cart.context';
import CartItem from '../carti-view/cart-view.component';
import Button from '../itemCount/item-count.component';

import './cart-dropdown.styles.css'

const CartDropdown = () => {

    const { cartItems } = useContext(CartContext);


    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.length === 0 && 
                        <span>Carrito Vacio</span>
                }
                {cartItems.map(item => <CartItem key={item.id} cartItem={item} />)}
            </div>
                <Button props='navigate' text='Terminar Compra'></Button>
        </div>
    )
};

export default CartDropdown;