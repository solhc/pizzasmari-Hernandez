import React from "react";
import carrito from "../img/carrito.png"
import '../styles/CartWidget.css'


const CartWidget = () => {
    return (
      <img   className='carro' src={carrito} alt='carrito' />
     
    );
}
export default CartWidget;