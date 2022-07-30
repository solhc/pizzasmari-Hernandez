import React from 'react'
import "../styles/Item.css"
import { Link } from 'react-router-dom'

export const Item = ({ id, nombre, imagen, precio }) => {



    return (
        <div className="col">
            <div className="card cardStyle">
                <img src={imagen} alt={nombre} className='card-img-top' />
                <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                    <p className="card-title" >${precio}</p>
                    
                    <Link  to={`/item/${id}`}>
                        <button className="ver-mas">Ver más</button>
                    </Link>
                </div>
            </div>
        </div>
    )

}