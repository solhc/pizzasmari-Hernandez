import React from "react";
import '../styles/ItemDetail.css';
import './ItemDetailContainer'

const ItemDetail = ({detail}) => {
 return(
  <div className="container-detail">
      <div className="size-image">
        <img  src={detail.imagen} alt="pizza margarita"/>
      </div>
      <div className="product-info">
        <div class="product-text">
          <h1>{detail.nombre}</h1><br/>        
          <p>{detail.descripcion}</p>      
        </div>
        <div>
          <p className="price">${detail.precio}</p>
          <button className="boton-detalle" type="button">Agregar al carrito</button>
        </div>
      </div>
    
  </div>
 )
}
    
export default ItemDetail;