import React from "react";
import { useCartContext } from "../context/CartContext";
import  '../styles/CartItems.css'

const CartItems = ({product}) =>  {
  const { deleteProduct } = useCartContext();
  
 
  return ( 
    <div className="cart-items">
          <img src={product.imagen} alt="imagen-pizza"/>
          <div>
            <h6> {product.nombre}</h6>      
            <p>Precio ${product.precio}</p>
            <p>Cantidad: {product.cantidad}</p>  
            <p>Subtotal: ${product.cantidad * product.precio} </p>  
            <div>
              <button className="btn btn-warning btn-sm" onClick={() => deleteProduct(product.id)}>Eliminar</button> 
            </div>
          </div>   
    </div>
    
  );
}

export default CartItems;