import React from "react";


const NavBar = () => {
    return (

        <nav class="navbar navbar-expand-lg navbar-light bg-warning">
            <div class="container-fluid">
                <a href="https://www.coderhouse.com.mx/" class="navbar-brand">Pizzasmar</a>
                <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto">
                        <a href="https://www.coderhouse.com.mx/" class="nav-item nav-link active">Inicio</a>
                        <a href="https://www.coderhouse.com.mx/" class="nav-item nav-link">Comprar</a>
                        <a href="https://www.coderhouse.com.mx/" class="nav-item nav-link">Contacto</a>
                    </div>   
                </div>
            </div>
        </nav>
     
    );
}
export default NavBar;