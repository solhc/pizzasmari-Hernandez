import React, { useState, useContext} from "react";
const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext);



const CartProvider = ({ children}) => {
  const [cart, setCart] = useState([]);

  const addProduct = (item, cantidad) => {
    if (isInCart(item.id)) {
      setCart(cart.map(product => {
        return product.id === item.id ? { ...product, cantidad: product.cantidad + cantidad} : product
      }));
    }else{
      setCart([...cart, { ...item, cantidad}]);
    }
  }
  
  const totalPrice =() => { return cart.reduce((ant, act) => ant + act.cantidad * act.precio, 0);}
  const totalProducts = () => cart.reduce((acumula, productActual) => acumula + productActual.cantidad, 0);
  const clearCart = () => setCart([]);
  const isInCart = (id) => cart.find (product => product.id === id) ? true : false;
  const deleteProduct = (id) => setCart(cart.filter(product => product.id !== id));
  
  
  return(
    <CartContext.Provider value={{
      clearCart,
      isInCart,
      deleteProduct,
      addProduct,
      totalPrice,
      totalProducts,
      cart
    }}>
      {children}
      </CartContext.Provider>
  )
    
}

export default CartProvider