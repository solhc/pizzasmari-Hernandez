import { useState } from "react";
import "../styles/ItemCount.css"
import Swal from 'sweetalert2'

function ItemCount({stock}){
  const [num, setNum] = useState(0);

  const suma = () => {
    if(num < stock){
      setNum(num+1)
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

  const resta = () => {
    if(num>0){
      setNum(num - 1)
    }
  }

  const reiniciar = () => {
    setNum(0)
  }

  const agregarCarrito = ()  =>{
    console.log("Agregaste", num, "pizza(s) al carrito")
  }

  return(
    <>
      <div className="contenedor-contador">
        <p> { stock > 1 ? `${stock} unidades disponibles` : `${stock} unidades disponbles` } </p>
        <p> {num} </p> 
        <div className="botones-chicos">
          <button  onClick={suma}> + </button> 
          <button onClick={resta}> - </button> 
          <button  onClick={reiniciar}> x </button> 
        </div>
        <button className="boton-agregar" onClick={agregarCarrito}>{ num > 0 ? `Agregar al carrito` : `Elige tu cantidad` }  </button>
      </div>
    </>
  )

}

export default ItemCount;