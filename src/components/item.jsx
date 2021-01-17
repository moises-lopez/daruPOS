import React, { Component } from 'react';

const Item = ({ID, nombre, precio, cantidad, categoria, producto}) => {
    return ( 
            <tr>
                <td>{ID}</td>
                <td>{nombre}</td>
                <td>{precio}</td>
                <td>{cantidad}</td>
                <td>{categoria}</td>

            </tr>
     );
}
 
export default Item;