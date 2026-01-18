import React from 'react'
import {  } from "./BarraNavegacion.css";

export default function BarraNavegacion() {

    const user={
        email: "ibra@email.com",
        password: "12345"
    }

  return (
    <div className='card'>
        <h3>Try the product out for free</h3>
        <input type="text" placeholder='email'/>
        <input type="text" placeholder='password'/>
        <button>Start Free Trial</button>
    </div>
  )
}
