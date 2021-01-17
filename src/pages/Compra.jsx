import React, { Component } from 'react';

import Nota from '../components/nota'
import List from '../components/list'

import '../css/compra.css'

const Compra = () => {

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
            <Nota/>
            <List
            items={items}
            />
            <input type="button" id="btnExport" class="btn btn-default btn-lg pull-right" value=" Export Table data into Excel " />
            
        </React.Fragment>
     );
}
 
export default Compra;