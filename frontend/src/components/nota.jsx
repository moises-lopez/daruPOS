import React, { Component } from 'react';

import Item from './item'

import '../css/compra.css'
import '../css/home.css'

const Nota = ({items}) => {

    return (  
        <React.Fragment>
            <div className='flex-center'>
                <div className='cart margin_spaces'>
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

                <div className='total total_size margin_spaces'>
                    <tr>
                        <td>Subtotal:</td>
                        <td>234</td>
                    </tr>

                    <tr>
                        <td>Impuesto</td>
                        <td>567</td>
                    </tr>

                    <tr>
                        <td>Total</td>
                        <td>120304</td>
                    </tr>
                </div>
            </div>
        </React.Fragment>
    );
}
 
export default Nota;