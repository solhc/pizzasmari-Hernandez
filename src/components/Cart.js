import React from "react";
import { useCartContext} from  '../context/CartContext'
import {Link} from 'react-router-dom';
import CartItems from "./CartItems";
import "../styles/cart.css"
import carro from  "../img/carro-vacio.png";

const Cart = () => {
  const { cart, totalPrice } = useCartContext();
  if (cart.length === 0) {
      return (
        <div className="total-cart">
            <p>Carrito vacio</p>
            <div>
              <img src={carro} alt='carro-vacio' /> 
            </div>
            <Link to='/' className="btn btn-warning btn-sm"> Hacer compras</Link>
        </div>

      );
  }

return(
<>
  {
    cart.map(product => <CartItems key={product.id} product= {product} />)
  }
  <p  className="total-pagar" >Total a pagar: ${totalPrice()}   </p>
</>
)
}

export default Cart;

