import React from "react";
import carrito from "../img/carrito.png";
import '../styles/CartWidget.css';
import { useCartContext } from "../context/CartContext";

const CartWidget = () => {
  const {totalProducts} = useCartContext();
  return (
    <>
      <img   className='carro' src={carrito} alt='carrito' />
      <span> {totalProducts() || ''} </span>
    </>
    
  );
}
export default CartWidget;