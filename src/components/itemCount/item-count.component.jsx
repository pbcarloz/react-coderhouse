import { useState, useContext } from "react";
import { CartContext } from '../../context/cart.context'
import { useNavigate } from "react-router-dom";
import './item-count.styles.css'

const Button = ({stock, product, text, props, initial}) => {

    const [counter, setCounter] = useState(initial);
    const { addItemToCart } = useContext(CartContext)

    const addProductToCart = () => addItemToCart(product);

    const navigate = useNavigate();
    const goToCheckOutHandler = () => {
        navigate('/carrito')
    }

// funcion para determinar la accion del click
    const clickHandler = () => {
        if( props === 'navigate') {
            goToCheckOutHandler();
            setCounter(initial);
            
        } else if ( counter <= stock ) {
            setCounter(counter +1 )
            addProductToCart();
            console.log(`Se agregaron ${counter} piezas al carrito`);
        }
    };

    return (
            <button onClick={() => clickHandler(props)} className='button-container'>{text}</button>
    )
};

export default Button;

 