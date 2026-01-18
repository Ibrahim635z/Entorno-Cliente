import React from 'react'
import Buscador from './Buscador'
import Carrito from './Carrito'
import {  } from "./Booklist.css";

export default function Booklist() {
  return (
    <div className='container-booklist'>
        <h2>The Book List</h2>
        <div className='componentes'>
            <div className='buscador'>
                <Buscador></Buscador>
            </div>
            <div className='carrito'>
                <Carrito></Carrito>
            </div>
            
            
        </div>
        
    </div>
  )
}
