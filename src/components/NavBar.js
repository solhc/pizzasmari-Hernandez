import React from "react";
import { NavLink } from 'react-router-dom'
import logo from "../img/logo.png"
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-warning">
            <div className="container-fluid">
            <NavLink activeClassName='active' to="/">
             <img   className='carro' src={logo} alt='logo' />   
            </NavLink>    
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto linea">
                        <NavLink activeClassName='active' to="/" className="nav-item nav-link active">Inicio</NavLink>
                        <NavLink activeClassName='active' to="/category/Tradicional" className="nav-item nav-link">Tradicionales</NavLink>
                        <NavLink activeClassName='active' to="/category/Extranjera" className="nav-item nav-link">Extranjeras</NavLink>
                        <NavLink activeClassName='active' to="/category/Vegetariana" className="nav-item nav-link">Vegetarianas</NavLink>
                        
                        <CartWidget/>
                    </div>   
                </div>
            </div>
        </nav>
      </div>
    );
}
export default NavBar;