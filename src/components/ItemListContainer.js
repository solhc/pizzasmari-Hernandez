import React from "react";
import '../styles/ItemListContainer.css'
import {useEffect, useState} from 'react'
import { ItemList }  from './ItemList';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';

const ItemListContainer = (texto) => {
  const [product, setProduct] = useState([]);
  const {idCategory} = useParams();
  const [isLoading, setIsLoading]= useState(true);
  
 
  useEffect(() => {
   
    const db = getFirestore();
    const findCollection = collection(db, 'product-pizza');
    if (idCategory) {
      const searchFilter = query(findCollection, where('categoria', '==', idCategory))
      getDocs(searchFilter)
        .then(res => setProduct (res.docs.map(producto=> ({ id: producto.id, ...producto.data() }))))
    } else{
      getDocs(findCollection)
        .then(res => setProduct(res.docs.map(producto => ({ id: producto.id, ...producto.data() }))))
    } setIsLoading(false);
  }, [idCategory])  



  return isLoading ?  <h4>Procesando</h4> 
   : (
    <section className='contenedor'>
       <h2>{texto.bienvenida}</h2>
       <p align='justify' className='mensaje'>{texto.mensaje}</p>
      <ItemList items={product} />
    </section>   
  )
}

export default  ItemListContainer;