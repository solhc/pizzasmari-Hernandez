import React from 'react'
import { Item } from './Item'

export const ItemList = ({ items}) => {

    console.log('listadoPizzas', items)

    return (
       // Item = ({ name, image, price, id }) => {
        <div className='container'>
            <div className="row justify-content-evely">
            {items.map((campo) => <Item key={campo.id} nombre={campo.nombre} imagen={campo.imagen} precio={campo.precio} id={campo.id} />)}
            
            </div>
        </div>

    )
}