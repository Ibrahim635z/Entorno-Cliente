import React from "react";
import Pruebas from "./pages/Pruebas.jsx";
export default function MyApp() {
  const v = 10;
  console.log("MyApp rendered");
  return (
    <div>
      Hola mundo {v}
      <Pruebas />
    </div>
  );
}
