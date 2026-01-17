import React from 'react'
import Card from "./Card"


export default function Grid() {
     const arProducto=["Producto1","Producto2", "Producto 3"];
  return (
    <ul>
            <Card producto='nombre del producto' precio='10'/>
            <li>{arProducto[0]}</li>
            <li>{arProducto[1]}</li>
            <li>{arProducto[2]}</li>
        </ul>
  )
}
