import React from "react";
import Card from "./Card";
import db from "../json/db.json";

export default function Grid() {
  return (
    <div>
      <h2>Lista de Productos</h2>
      <div>
        {db.map((producto) => (
          <Card key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
}
