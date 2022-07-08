import React, {useState} from "react";
import '../styles/ItemDetail.css';
import './ItemDetailContainer';
import './CartWidget';
import ItemCount from "./ItemCount";
import {Link} from 'react-router-dom';


const ItemDetail = ({product}) => {
  
  const [goToCart, setGoToCart] = useState(false);
  const onAdd =(cantidad) => {
    console.log("Total de pizzas agregadas "+ cantidad)
    setGoToCart(true);
  } 

  return(
   <div className="container-detail">
       <div className="size-image">
         <img  src={product.imagen} alt="pizza.."/>
       </div>
       <div className="product-info">
         <div className="product-text">
           <h1>{product.nombre}</h1><br/>        
           <p>{product.descripcion}</p>      
         </div>
         <div>
           <p className="price">${product.precio}</p>  
           {
            goToCart
            ? <Link to='/cart'> Ir al carrito </Link>
            : <ItemCount initial={1} stock={5} onAdd={onAdd}/>
          }         
         </div>
        
       </div>
         
     
   </div>
  )
 }
 
 export default ItemDetail;