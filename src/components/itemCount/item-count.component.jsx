import { useState, useContext } from "react";
import { CartContext } from '../../context/cart.context'
import { Link } from "react-router-dom";
import './item-count.styles.css'

const ItemCounter = ({stock, initial, product}) => {

    const [counter, setCounter] = useState(initial);

    const { addItemToCart } = useContext(CartContext)


    const addProductToCart = () => addItemToCart(product);

    const addItem = () => {
        if (counter < stock) {
            setCounter(counter + 1 );
            console.log("added")
         }
    };

    const subtractItem = () => {
        if (counter > 0 ) {
            setCounter(counter - 1 );
            console.log("substracted")
         }
    };

    // Funcion OnAdd para almacenar la cantidad
    const onAdd = () => {
        console.log(`Se agregaron ${counter} piezas al carrito`);
        // desaparece el itemCount
        setCounter(initial);
    }



    return (
        <div className="counter-card-container">
        <span onClick={addProductToCart} className='link-carrito'>Agregar al Carrito de Compra</span>
            <div className="counter">
                <button onClick={subtractItem}>-</button>
                <span>{counter}</span>
                <button onClick={addItem}>+</button>
            </div>
            {/* Boton terminar la compra */}
            <Link to='/carrito' className='link-carrito'>
                <span onClick={onAdd} className='link-carrito'>Finalizar Compra</span>
            </Link>
        </div>
    )
};

export default ItemCounter;

 