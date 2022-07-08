import React, { useEffect, useState } from "react";
import "../styles/ItemCount.css"
import Swal from 'sweetalert2'

const ItemCount = ({initial, stock, onAdd}) => {
  const [count, setCount] = useState (initial);

  const restar = () =>{
    setCount(count-1);
  }

  const sumar = () => {
    if(count < stock){
      setCount(count+1)
    }
    else{
      Swal.fire({
        title: 'Atención!',
        text: 'Ya ha llegado al stock máximo de este producto',
        icon: 'warning',
        timer: 2000
      })
    } 
  }

  useEffect (() => {
    setCount(parseInt(initial));
  }, [initial])



  return (
    <div className ='contenedor-contador'>

      <button className="boton-aritmetico" disabled = {count <= 1} onClick = {restar}> - </button>
      <span>{"  " + count + "  "}</span>
      <button  className="boton-aritmetico" onClick = {sumar}> + </button>
      <div>
        <button className="boton-agregar" disabled = {stock <= 0} onClick = {() => onAdd(count)}> Agregar al carrito </button>
        
      </div>

    </div>
  );
  }


export default ItemCount;