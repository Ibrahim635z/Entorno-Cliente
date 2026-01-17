import React, { useState } from 'react'

export default function Contador() {

    console.log("Renderizando el componente")
    
    const [contador,setContador]= useState(0);

  return (
    <>
    <div>Contador</div>
    <button onClick={() => setContador(contador+1)}>Add {contador}</button>
    <button onClick={() => setContador(contador-1)}>Remove {contador}</button>
    </>
    
  )
}
