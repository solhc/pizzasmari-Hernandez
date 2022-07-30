import React, {useEffect, useState} from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';


const ItemDetailContainer = () => {

  const [product, setProduct] = useState({});
  const [isLoading,setIsLoading] = useState(true);
  
  const { itemId } = useParams();
  
  useEffect(() => {
    
    const db = getFirestore();
    const pizzaRef = doc(db, 'product-pizza', itemId);
    getDoc(pizzaRef).then(res => setProduct({ id:res.id, ...res.data()}))
    setIsLoading(false);
  }, [itemId])


  
  return (
    <div>
      {isLoading  && <p algin="center"><h4 >Cargando.... </h4></p> }
    
    <ItemDetail product={product}  /> 
    </div>
  )

}


export default  ItemDetailContainer;