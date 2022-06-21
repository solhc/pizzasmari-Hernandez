import React from "react";
import '../styles/ItemListContainer.css'

function ItemListContainer(greeting){
  return (
    <section className='contenedor'>
      <h2>{greeting.bienvenida}</h2>
      <p align='justify' className='mensaje'>{greeting.mensaje}</p>
    </section>
  )
}

export default  ItemListContainer;