import React from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import * as bootstrap from 'bootstrap';
import  'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NotFound from './components/NotFound';
import CartWidget from './components/CartWidget';
import Cart from './components/Cart';
import CartProvider from './context/CartContext'

function App() {
  return (
    <>
      <div>
        <CartProvider>
          <NavBar />,
          <Routes>
            <Route path='/' 
              element= {
                <ItemListContainer
                bienvenida='Bienvenidos a pizzasmari'
                mensaje='Disfruta de una rica pizza con los diferentes sabores que tenemos. Estamos seguros de que quedarás satisfecho con la atención que le brindamos a nuestros clientes. Los ingredientes que utilizamos son del día y se encuentran en perfectas condiciones, por ello nuestras pizzas tienen un gran sabor. Nuestro tiempo de respuesta es inmediato para que los clientes puedan saborear sus pizzas calientes. No lo pienses más y conoce a los mejores de la zona para elaborar pizzas.'
              
              />
            }>  
            </Route>
            
            <Route path='/category/:idCategory' 
              element={<ItemListContainer 
                procesando='Procesando....' />}>
            </Route>

            <Route path="/cart" element={<Cart />} />

            <Route path='item/:itemId' 
              element={<ItemDetailContainer />}>
            </Route>

            <Route path="*" element={<NotFound />} />
            
          </Routes>
        </CartProvider>
      </div>
   </>
  );
}

export default App;
