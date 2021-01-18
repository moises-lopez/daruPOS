import React, { Component, useState } from 'react';
import {useHistory} from 'react-router-dom'

import List from '../components/list'

import '../css/home.css'

const Productos = () => {
    let history = useHistory()

    let [items, setItems] = useState([
        {
          id: "001",
          nombre: "Manga AOT",
          precio: 23,
          cantidad: 3,
          categoria: "Anime",
        },
        {
          id: "002",
          nombre: "Manzana",
          precio: 40,
          cantidad: 12,
          categoria: "Comida",
        },
        {
          id: "003",
          nombre: "Pixel 5",
          precio: 8000,
          cantidad: 2000,
          categoria: "Telefono",
        },
      ]);
      

      let handlePushHistory = (url) => {
          history.push(url)
      } 

    return (  
        <React.Fragment>
            <div className='flex-center'>
                <button
                onClick={() => handlePushHistory('/AgregarProducto')}
                >Agregar Productos</button>
                <List 
                items={items}
                producto={true}
                className='margin_spaces'
                />
            </div>
        </React.Fragment>
    );
}
 
export default Productos;