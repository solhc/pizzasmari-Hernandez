import React, {useEffect, useState} from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom';
import {data} from './data/data.js'

const ItemDetailContainer = () => {

  const [product, setProduct] = useState({});
  const [isLoading,setIsLoading] = useState(true);
  const { itemId } = useParams();
  
  useEffect(() => {
    setIsLoading(true);
    const getItems = new Promise((resolve) => {
      setTimeout(() => {
        const myData = data.find((item) => item.id === itemId);
        resolve(myData);
      }, 1000);
    });

    getItems.then((res) => {
        setProduct(res);
        setIsLoading(false);
    });
 }, []);
  


    return isLoading ?
     <h4>Procesando.... </h4> :
      <ItemDetail product={product}  /> 
    
}


export default  ItemDetailContainer;