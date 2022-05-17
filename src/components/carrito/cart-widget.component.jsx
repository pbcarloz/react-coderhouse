import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'




const CartWidget = () => {
    return (
            <FontAwesomeIcon icon={ faShoppingCart } size='lg' className='iconAwesome'/>
    );
};

export default CartWidget;