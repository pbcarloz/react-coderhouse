
import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
    // busca si cartItems tiene productos con el mismo Id
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

    // si encuentra un id ya existente, incrementa la cantidad
    if (existingCartItem) {
        return cartItems.map((cartItem) => 
            cartItem.id === productToAdd.id ? {
            ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
            );
    }
 
    // devuelve un array con los cartItems, un nuevo array
    return [...cartItems, {...productToAdd, quantity: 1 }];
}

export const CartContext = createContext({
    // contexto para ventada checkout
    isCartOpen: false,
    setIsCartOpen: () => {},
    // contexto para agregar al carrito
    cartItems: [],
    addItemToCart: () => {},
})

export const CartProvider = ({children}) => {
    // state para la ventada de checkout
    const  [isCartOpen, setIsCartOpen ] = useState(false);
    // state para los items en el carrito
    const  [cartItems, setCartItems] = useState([]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
    
};