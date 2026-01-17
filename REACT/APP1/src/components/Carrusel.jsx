import React, { useState } from 'react'
import Card from "./Card";
import db from "../json/db.json";

export default function Carrusel() {

    const arrProductos = db;
    
    const [nProducto, setNProducto] = useState(0);

    const siguiente = () => {
        if (nProducto < arrProductos.length - 1) {
            setNProducto(nProducto + 1);
        }
    };

    const anterior = () => {
        if (nProducto > 0) {
            setNProducto(nProducto - 1);
        }
    };
  return (
    <>
    <Card producto={arrProductos[nProducto]}/>
    <button onClick={() => siguiente(nProducto+1)}>Add </button>
    <button onClick={() => anterior(nProducto - 1)}>Remove</button>
    </>
    
  )
}
