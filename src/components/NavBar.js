import React from "react";
import logo from "../img/logo.png"

import CartWidget from "./CartWidget";

const NavBar = () => {
    return (

      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-warning">
            <div className="container-fluid">
            <img   className='carro' src={logo} alt='logo' />       
                <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto">
                        <a href="/" className="nav-item nav-link active">Inicio</a>
                        <a href="/" className="nav-item nav-link">Comprar</a>
                        <a href="/" className="nav-item nav-link">Contacto</a>
                        <CartWidget/>
                    </div>   
                </div>
            </div>
        </nav>

      </div>

        
     
    );
}
export default NavBar;