import React from 'react'
import './Grid.css';
import Card from "./Card";
import db from "../json/productos.json";
import { useState } from 'react';
import '../App.css';

export default function Grid() {

    const [page, setPage] = useState(0);

    const itemsPorPagina = 3;

    const startIndex = page * itemsPorPagina;
    const endIndex = startIndex + itemsPorPagina;

    const productosVisibles = db.slice(startIndex, endIndex);

    const HTMLdb = productosVisibles.map(producto => {
        return (
            <Card key={producto.id} item={producto} />
        )
    })


    const siguiente = () => {

        endIndex < db.length && setPage(page + 1);
    }

    const anterior = () => {
        page > 0 && setPage(page - 1);
    }

    return (
        <div className='grid-container'>
            <h2>Lista de productos</h2>

            <div className='card-list'>
                {HTMLdb}
            </div>

            <div className='buttons'>
                <button onClick={anterior}>Anterior</button>
                <button onClick={siguiente}>Siguiente</button>
            </div>

        </div>

    )
}
