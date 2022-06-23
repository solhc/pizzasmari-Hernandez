import React from "react";
import '../styles/ItemListContainer.css'
import '../styles/ItemCount.css'
import ItemCount from "./ItemCount";


function ItemListContainer(greeting){
  return (
    <section className='contenedor'>
      <h2>{greeting.bienvenida}</h2>
      <p align='justify' className='mensaje'>{greeting.mensaje}</p>
        
      <ItemCount stock={5}/> {/*Contador*/} 
  
    </section>
    
    
    

  )
}

export default  ItemListContainer;