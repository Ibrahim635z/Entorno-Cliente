import React from "react";
import styles from "./Card.module.css";

export default function Card({ producto }) {
  if (!producto) return <p>Cargando producto...</p>;
  // console.log(props);
  return (
    <div>
      <h3 className={styles.h3}>{producto.title}</h3>
      <p>
        Precio:
        {producto.price > 100 ? producto.price + " oferta..." : producto.price}
        {producto.price > 100 && "✅"}
      </p>
      <p>{producto.category}</p>
    </div>
  );
}
