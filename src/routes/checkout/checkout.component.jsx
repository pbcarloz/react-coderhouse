
import CheckOutItem from '../../components/checkout-item/checkout.-item.component';
import SignUpForm from '../../components/formulario/formulario.component';

import { Link } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import { CartContext } from '../../context/cart.context';

import './checkout.styles.css'

const CheckOut = () => {
    const {cartItems, cartTotal } = useContext(CartContext);


    return (
        <Fragment>
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
                {cartItems.length === 0 && 
                    <Link to ='/' className='aviso'>
                        <h1>No Hay Articulos Agregados</h1>
                    </Link>
            }
            { 
              cartItems.map((cartItem) => 
                (<CheckOutItem cartItem={cartItem} key={cartItem.id}/> 
                ))
            }
            <span className='total'>Total: $ {cartTotal}</span>
            
        </div>
            {cartItems.length > 0 && 
                    <SignUpForm />
            }
            
        </Fragment>
    )
}

export default CheckOut;