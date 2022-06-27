import React from 'react'
import "../styles/Item.css"

export const Item = ({ nombre, imagen, precio, id }) => {

    return (
        <div className="col">
            <div className="card cardStyle">
                <img src={imagen} alt={nombre} className='card-img-top' />
                <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                    <p className="card-title" >${precio}</p>
                    <button className="ver-mas">Ver más</button>
                </div>
            </div>
        </div>
    )

}