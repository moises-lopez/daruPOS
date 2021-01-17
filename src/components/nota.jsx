import React, { Component } from 'react';

const Nota = () => {
    let items = [
        {
            id: '001',
            nombre: 'Manga AOT',
            precio: 23,
            cantidad: 3,
            categoria: 'Anime'
        },
        {
            id: '002',
            nombre: 'Manzana',
            precio: 40,
            cantidad: 12,
            categoria: 'Comida'
        },
        {
            id: '003',
            nombre: 'Pixel 5',
            precio: 8000,
            cantidad: 2000,
            categoria: 'Telefono'
        }
        
    ]

    return (  
        <React.Fragment>
            <div className='cart'>

            </div>

            <div className='total'>
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
        </React.Fragment>
    );
}
 
export default Nota;