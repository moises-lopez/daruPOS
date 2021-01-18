import React, { Component, useState } from 'react';

import Nota from '../components/nota'
import List from '../components/list'

import '../css/compra.css'

const Compra = () => {

    let [selectedItems, setSelectedItems] = useState([])
    
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
                <div className='margin_spaces size'>
                    <Nota
                    items={selectedItems}
                    />
                </div>
                <div className='margin_spaces size'>
                    <List
                    items={items}
                    />
                </div>
                <input type="button" value="Realizar Compra" />
        </React.Fragment>
     );
}
 
export default Compra;