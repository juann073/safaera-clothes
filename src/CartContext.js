import { createContext, useContext, useState } from "react";
import productos from "./productos";
const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);
const CartProvider = ({ children }) => {
  const [Cart, setCart] = useState([]);
  console.log(Cart);

  const clearCart = () => {
    setCart([]);
  };
  const isInCart = (Id) => {
    return Cart.find(productos.id === Id) ? true : false;
  };
  const removeItem = (Id) => {
    const cartUpdate = Cart.filter((productos) => productos.id !== Id);
    setCart(cartUpdate);
  };

  const addItem = (item, newQuantity) => {
    const newCart = Cart.filter((productos) => productos.id !== item.id);
    newCart.push({ ...item, quantity: newQuantity });
    setCart(newCart);
    console.log(newCart);
  };
  const totalPrice = () => {
    return Cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
  };
  const totalProducts = () => {
     return Cart.reduce(
      (acumulador, productoActual) => acumulador + productoActual.quantity,
      0
    );
  };

  return (
    <CartContext.Provider value={{ addItem, removeItem, clearCart, isInCart, totalPrice, totalProducts, Cart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
