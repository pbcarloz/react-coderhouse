
import { createContext, useState, useEffect } from "react";

    // FUNCION PARA AGREGAR ITEMS DEL CARRITO O INCREMENTAR CANTIDAD
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

// FUNCION PARA ELIMINAR ITEMS DEL CARRITO O REDUCIR CANTIDAD
const removeCartItem =(cartItems, cartItemToRemove) => {
    // busca el item para remover
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);
    // verifica si la cantidad es 1, y la elimina el ultimo elemento en el array que coincide con el id
    if ( existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id != cartItemToRemove.id)
    }
    //regresa el carrito con la cantidad actualizada
    return cartItems.map((cartItem) => 
        cartItem.id === cartItemToRemove.id ? {
        ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
    
}

// funcion para eliminar item del carrito
const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter(cartItem => cartItem.id != cartItemToClear.id)
}   

export const CartContext = createContext({
    // contexto para ventada checkout
    isCartOpen: false,
    setIsCartOpen: () => {},
    // contexto para agregar al carrito
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    cartCount: 0,
    cartTotal: 0,
})

export const CartProvider = ({children}) => {
    // state para la ventada de checkout
    const  [isCartOpen, setIsCartOpen ] = useState(false);
    // state para los items en el carrito
    const  [cartItems, setCartItems] = useState([]);
    // sstate para contar items en carrito
    const  [cartCount, setCartCount] = useState(0);
    // state para total del carrito
    const  [cartTotal, setCartTotal] = useState(0);


    useEffect(() => {
        // cuando cartCount se actualiza, ejecuta la funcion.
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(newCartCount);
    }, [cartItems])

    useEffect(() => {
        // cuando cartCount se actualiza, ejecuta la funcion.
        const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
        setCartTotal(newCartTotal);
    }, [cartItems])

    // funcion para agregar items al carrito contexto
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }
    // funcion para quitar items al carrito contexto
    const removeItemToCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove));
    }

    // funcion para eliminar items al carrito 
    const clearItemFromCart = (cartItemToClear) => {
        setCartItems(clearCartItem(cartItems, cartItemToClear));
    }

    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount, removeItemToCart, clearItemFromCart, cartTotal };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
    
};