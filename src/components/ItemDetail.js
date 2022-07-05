import React from "react";
import '../styles/ItemDetail.css';
import './ItemDetailContainer';
import { useParams } from 'react-router-dom';
import {useEffect, useState} from 'react'


const ItemDetail = ({product}) => {
  return(
   <div className="container-detail">
       <div className="size-image">
         <img  src={product.imagen} alt="pizza.."/>
       </div>
       <div className="product-info">
         <div class="product-text">
           <h1>{product.nombre}</h1><br/>        
           <p>{product.descripcion}</p>      
         </div>
         <div>
           <p className="price">${product.precio}</p>
           <button className="boton-detalle" type="button">Agregar al carrito</button>
         </div>
       </div>
     
   </div>
  )
 }
 
 export default ItemDetail;