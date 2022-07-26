import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import { useCartContext} from  '../context/CartContext';
import CartItems from "./CartItems";
import {Link} from 'react-router-dom';
import "../styles/cart.css"
import carro from  "../img/carro-vacio.png";
import { useState } from "react";
import Swal from "sweetalert2";




const Cart = () => {
 

/*Constantes  */
const { clearCart } = useCartContext();
const { cart, totalPrice } = useCartContext();
const [ nombre, setNombre ] = useState("");
const [ telefono, setTelefono ] = useState("");
const [ email, setEmail ] = useState("");
const [ datos, setDatos ] = useState(false);
const [ idOrden, setIdOrden ] = useState("0");


const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);


 /* Envío de orden a Firebase */
const db = getFirestore();
const terminarCompra = () =>{
    const datosCompra = {
        "buyer": {
        "name" : nombre,
        "phone" : telefono,
        "email" : email
        },
        items: cart.map(product =>({id:product.id, title: product.nombre, price: product.precio})),
        date: Date(),
        total: totalPrice(),
    };
    try {
        addDoc(collection(db, "orders"), datosCompra)
        
       .then((doc) =>setIdOrden(doc.id))
       alert (`Cofirmacion de compra, numero de pedido: ${idOrden}` )
      } catch (e) {
        console.error("Error al agregar el documento ", e);
      }
      
    clearCart();
    setDatos(!datos);
}

   
    console.log("orden...",idOrden)
    
 
  
  if (cart.length === 0) {
      return (
        <div className="total-cart">
            <p>Carrito vacio</p>
            <div>
              <img src={carro} alt='carro-vacio' /> 
            </div>
            <Link to='/' className="btn btn-warning btn-sm"> Hacer compras</Link>
        </div>

      );
  }
  else if (idOrden && datos) { 
    return (
        <main className="checkOut">
            <div className="checkOutDiv">
                
                <h3 className="orden">Tu número de orden es: <span className="ordenNum">{idOrden}</span></h3>
                <Link to='/' className="btn btn-warning btn-sm boton-comprar" > Regresar</Link> 
            </div>
        </main>
        
    )
   
  }
 


  return (
    
    <>
        {
          cart.map(product => <CartItems key={product.id} product= {product} />)
        }
        <p  className="total-pagar" >Total a pagar: ${totalPrice()}   </p>
        
          <Button className="boton-concluir"  onClick={handleShow}>
            Concluir compra
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Registro de compra</Modal.Title>
            </Modal.Header>
            <Modal.Body>

              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="nombre"
                    onChange={(event) =>setNombre(event.target.value)}
                    autoFocus
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    onChange={(event) =>setEmail(event.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Teléfono</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="teléfono"
                    onChange={(event) =>setTelefono(event.target.value)}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
            
              <Button variant="primary" onClick={terminarCompra}> 
                    Finalizar compra
              </Button> 
                  
              <Button variant="secondary" onClick={handleClose}>
                    Cerrar
              </Button>            
            </Modal.Footer>
            
          </Modal>
         
    </>
  );
  
};


export default Cart;

