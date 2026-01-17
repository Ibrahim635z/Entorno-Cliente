import React from "react";
import {  } from "./pages/test";

export default function MyApp() {

  const v=6;
  console.log(`hola mundo valor: ${v}`);
  return (
  <div>Hola mundo {v+1}</div>
  <test/>
);
}
