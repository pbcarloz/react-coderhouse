import { useState, useContext } from "react";
import { CartContext } from '../../context/cart.context'
import { useNavigate } from "react-router-dom";
import './item-quantity.styles.css'

const QuantityButton = ({ producto, stock }) => {

    const [counters, setCounters] = useState(0);
    const [visual, setVisual] = useState(true);

    const { addQuantityToCart } = useContext(CartContext)

    const addProductToCart = () => addQuantityToCart(producto, counters)
        
    const buttonHandler = () => {
        addProductToCart();
        setVisual(false);
    }

    const navigate = useNavigate();
    const goToCheckOutHandler = () => {
        navigate('/carrito')
    }

// funcion para determinar la accion del click
    const addQuantity = () => {
        if ( counters < stock ) {
            setCounters(counters + 1 );
            console.log(`Se agregaron ${counters} piezas al carrito por queee`);
        }
    };

    const reduceQuantityHandler = () => {
        if ( counters > 0 ) {
            setCounters(counters - 1 );
            console.log(`Se quitaron!!!! ${counters} piezas al carrito`);
        }
    };

    return (
            <div className="button-group-container">
                <div className="quantity">
                    {visual && <span onClick={reduceQuantityHandler} className='texts'>-</span> }
                    {visual && <span>{counters}</span> } 
                    {visual && <span onClick={addQuantity} className='texts'>+</span> }
                </div>
                <div className="navigators">  
                    {visual && <button onClick={buttonHandler} >Agregar Al Carrito</button> }
                    {visual === false && <button onClick={goToCheckOutHandler} >Terminar Compra</button> }
                </div>

            </div>
            

    )
};

export default QuantityButton;