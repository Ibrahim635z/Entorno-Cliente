import React from 'react'
import './Card.css';


export default function Card({ item }) {


  return (
    <div className="card">
        <h3>{item.title}</h3>
        <img src={item.image} alt={item.title} width="100" />
        <p>Precio: ${item.price}</p>
        <p>Categoría: {item.category}</p>
    </div>
  )
}
