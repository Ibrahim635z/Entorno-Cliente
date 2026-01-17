import React from "react";
import Pruebas from "./pages/Pruebas";

export default function MyApp() {

  const v=6;
  console.log(`hola mundo valor: ${v}`);
  return (
  <div>Hola mundo {v+1}
  <Pruebas/>

  </div>
 
);
}
