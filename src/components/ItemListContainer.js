import React from "react";
import '../styles/ItemListContainer.css'
import '../styles/ItemCount.css'
import ItemCount from "./ItemCount";
import {useEffect, useState} from 'react'
import { ItemList }  from './ItemList';



function ItemListContainer({bienvenida, mensaje}){

  const [info, setInfo] = useState([])

  useEffect(()=>{
   setTimeout(
    ()=>{
      fetch('data.json')
      .then((resp) => resp.json())
      .then((data) => setInfo(data))
    },2000
   )
  },[])



  return (
    <section className='contenedor'>
      <h2>{bienvenida}</h2>
      <p align='justify' className='mensaje'>{mensaje}</p>

      <ItemCount stock={5}/> {/*Contador*/}

      <ItemList listadoPizzas={info} />
     
     
    </section>   
      
  )
}
export default  ItemListContainer;