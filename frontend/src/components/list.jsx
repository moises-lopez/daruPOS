import React, { Component } from 'react';

import Item from '../components/item'

import '../css/compra.css'

const List = ({items}) => {
    return ( 
        <React.Fragment>
            <div className='container'>
            <table className='table'>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Categoria</th>
                </tr>
                {items.map((item) => (
                    <Item
                    ID={item.id}
                    nombre={item.nombre}
                    precio={item.precio}
                    cantidad={item.cantidad}
                    categoria={item.categoria}
                    producto={false}
                    />
                ))}

            </table>
            </div>
        </React.Fragment>
     );
}
 
export default List;