import React from "react";
import '../styles/ItemListContainer.css'
import '../styles/ItemCount.css'
/*import ItemCount from "./ItemCount";*/
import {useEffect, useState} from 'react'
import { ItemList }  from './ItemList';
import { useParams } from 'react-router-dom';
import {data} from './data/data.js'

 
const ItemListContainer = (props) => {
  const [product, setProduct] = useState([]);
  const {idCategory} = useParams();
  const [isLoading, setIsLoading]= useState(true);

  useEffect(() => {
   setIsLoading(true);
   const getProducs = new Promise((resolve) => {
    setTimeout(() => {
      const myData = idCategory
        ? data.filter((item) => item.categoria === idCategory)
        : data;
      resolve(myData);
    }, 1000);  
   });
   getProducs
    .then((res) => {
      setProduct(res);
    })
    .finally(() => setIsLoading(false));
  }, [idCategory]);

  return isLoading ? ( <h4>{props.procesando}</h4> )
   : (
    <section className='contenedor'>
       <h2>{props.bienvenida}</h2>
       <p align='justify' className='mensaje'>{props.mensaje}</p>

       {/*COMPONENTE CONTADOR <ItemCount stock={5}/> Contador*/}

      <ItemList items={product} />
    </section>   
      
  )
}

export default  ItemListContainer;