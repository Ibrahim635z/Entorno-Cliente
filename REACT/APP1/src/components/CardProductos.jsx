import React from "react";
import styles from "./CardProductos.module.css";

export default function CardProductos({ producto }) {
  {
    console.log(producto);
  }
  return (
    <div className={styles.contenedor}>
      <h3>{producto.title}</h3>
      <p className={styles.precio}>{producto.precio}</p>
      <p className={styles.category}>{producto.category}</p>
      <img src={producto.image} alt={producto.title} />
    </div>
  );
}
