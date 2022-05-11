import react, { useState } from "react";
import './item-count.styles.css'

const ItemCounter = ({stock, initial}) => {

    const [counter, setCounter] = useState(initial);

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


    return (
        <div className="counter-card-container">
            <p>Agregar al Carrito</p>
            <div className="counter">
                <button onClick={subtractItem}>-</button>
                <p>{counter}</p>
                <button onClick={addItem}>+</button>
            </div>
        </div>
    )

};

export default ItemCounter;

 