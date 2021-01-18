import React, { Component } from 'react';

const Item = ({ID, nombre, precio, cantidad, categoria, producto}) => {
    return ( 
            <tr>
                <td>{ID}</td>
                <td>{nombre}</td>
                <td>{precio}</td>
                <td>{cantidad}</td>
                <td>{categoria}</td>
                { producto ? 
                    <div>
                    <td> 
                    <button> Editar</button> 
                    </td>
                    <td> 
                    <button> Borrar </button>     
                    </td>
                    </div> 
                    : <div/>}
            </tr>
     );
}
 
export default Item;