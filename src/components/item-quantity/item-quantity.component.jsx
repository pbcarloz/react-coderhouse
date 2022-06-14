import { useState, useContext } from "react";
import { CartContext } from '../../context/cart.context'
import { useNavigate } from "react-router-dom";

const QuantityButton = ({ producto, stock }) => {

    const [counters, setCounters] = useState(0);

    const { addQuantityToCart } = useContext(CartContext)

    const addProductToCart = () => addQuantityToCart(producto, counters);

    const navigate = useNavigate();

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
            <div>
                <button onClick={addQuantity} >Agregar Cantidad</button>
                <span>{counters}</span>
                <button onClick={reduceQuantityHandler} >Reducir Cantidad</button>
                <button onClick={addProductToCart} >Agregar Al Carrito</button>
                <button onClick={() => navigate(-1)} >Volver</button>
            </div>
            

    )
};

export default QuantityButton;