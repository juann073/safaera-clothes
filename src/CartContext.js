import { createContext, useContext, useState } from "react";
import NuevoArray from "./productos";
const CartContext = createContext([])
export const useCartContext = () =>useContext(CartContext)


const CartProvider = ({children}) =>{
const [Cart, setCart] = useState([])
console.log(Cart);
const clearCart = () =>{
    setCart([])
    }
const isInCart = (Id) =>{
    return Cart.find(NuevoArray.id === Id) ? true : false
    }
const removeItem = (Id) =>{
    const cartUpdate = Cart.filter(NuevoArray => NuevoArray.id !== Id)
        setCart(cartUpdate)
    }

const addItem = (item, newQuantity) =>{
const newCart = Cart.filter(NuevoArray => NuevoArray.id !== item.id)
    newCart.push({...item, quantity: newQuantity})
    setCart(newCart)
    console.log("cart:", Cart);
}




return(
    <CartContext.Provider value={{ Cart ,addItem, removeItem, clearCart, isInCart}}>{children}</CartContext.Provider>
    )
}

export default CartProvider