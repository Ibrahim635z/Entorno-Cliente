import React from 'react'
import {  } from "./Buscador.css";
export default function Buscador() {
  return (
    <div className='container-buscador'>
        <h2>Producto</h2>
        <p>Title</p>
        <input type="text" placeholder='Titulo del libro'/>
        <p>Author</p>
        <input type="text" />
        <p>Genre</p>
        <input type="text" />

        <button>Add Book</button>
    </div>
  )
}
