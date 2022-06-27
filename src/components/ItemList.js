import React from 'react'
import { Item } from './Item'

export const ItemList = ({ listadoPizzas }) => {

    console.log('listadoPizzas', listadoPizzas)

    return (
       // Item = ({ name, image, price, id }) => {
        <div className='container'>
            <div className="row justify-content-evely">
            {listadoPizzas.map((campo) => <Item key={campo.id} nombre={campo.nombre} imagen={campo.imagen} precio={campo.precio} />)}
            
            </div>
        </div>

    )
}