import React, {useState} from "react";
import '../styles/ItemDetail.css';
import './ItemDetailContainer';
import './CartWidget';
import ItemCount from "./ItemCount";
import {Link} from 'react-router-dom';
import { useCartContext} from  '../context/CartContext'


const ItemDetail = ({product}) => {
  
  const [goToCart, setGoToCart] = useState(false);
  const {addProduct} = useCartContext();

  const onAdd =(cantidad) => {
    setGoToCart(true);
    addProduct(product, cantidad);
  } 

  return(
   <div className="container">
       <div className="row">
          <div className="col-md-6 " order-md-1>
            <img  src={product.imagen} alt="pizza.."/>
          </div>

          <div className="col-md-6 datos" order-md-2>
        
            <h1 className="nombre-producto">{product.nombre}</h1><br/>        
            <p className="descripcion-producto">{product.descripcion}</p>      
          
            <p className="price">${product.precio}</p>  
            {
              goToCart
              ?
            <Link to='/cart' className="btn btn-warning btn-sm boton-comprar" > Terminar compra </Link> 
              : <ItemCount initial={1} stock={5} onAdd={onAdd}/>
            }         
          </div>
        </div>
    </div>
  )
 }
 
 export default ItemDetail;