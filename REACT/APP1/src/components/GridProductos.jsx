import React from "react";
import db from "../json/db.json";
import CardProductos from "./CardProductos";
import styles from "./GridProductos.module.css";

export default function GridProductos() {
  return (
    <div>
      <h1 className={styles.titulo}>Lista de productos</h1>
      {console.log(db)}

      <div className="contenedor">
        {db.map((producto) => {
          return <CardProductos key={producto.id} producto={producto} />;
        })}
      </div>
    </div>
  );
}


