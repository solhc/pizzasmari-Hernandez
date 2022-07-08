import React from "react";
import '../styles/ItemListContainer.css'
import {useEffect, useState} from 'react'
import { ItemList }  from './ItemList';
import { useParams } from 'react-router-dom';
import {data} from './data/data.js';

 
const ItemListContainer = (props) => {
  const [product, setProduct] = useState([]);
  const {idCategory} = useParams();
  const [isLoading, setIsLoading]= useState(true);

  useEffect(() => {
   setIsLoading(true);
   const getProducts = new Promise((resolve) => {
    setTimeout(() => {
      const myData = idCategory
        ? data.filter((item) => item.categoria === idCategory)
        : data;
      resolve(myData);
    }, 1000);  
   });
   getProducts
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
     
      <ItemList items={product} />
    </section>   
      
  )
}

export default  ItemListContainer;