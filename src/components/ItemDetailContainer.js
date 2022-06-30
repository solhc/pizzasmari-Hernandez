import React, {useEffect, useState} from "react";
import ItemDetail from "./ItemDetail";


const pizza = {
  id: 1,
  nombre: "Pizza Hawaiana",
  precio: 130,
  descripcion: "Contiene una base de queso fundido y tomate que se aliñan con jamón y piña.",
  imagen:"https://i.ibb.co/tCRyWrW/pizza-haw.jpg"
}

const ItemDetailContainer = () =>{

const [detail, setDetail] = useState({});

  useEffect(() =>{
    const getDetail = new Promise (resolve => {
      setTimeout(() => {
        resolve(pizza);
      }, 2000);
    });
    getDetail.then(res => setDetail(res));
  }, [])

  return(

    <ItemDetail detail = {detail} />
    
  )

}

export default  ItemDetailContainer;