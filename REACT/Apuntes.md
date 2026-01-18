npm create vite@latest

seguimos los pasos.

Luego nos movemos de nuevo a la carpeta del proyecto.

npm install

para ejecutarlo:

npm run dev


# Comunicación entre Componentes (Ejemplo usando Booklist)

## 1. De Padre a Hijo (Props)
Para enviar información del componente padre (`Booklist`) al hijo (`Buscador`), usamos **props**. Es como pasar argumentos a una función.

**Ejemplo:** `Booklist` le pasa un texto de placeholder al `Buscador`.

En **Booklist.jsx** (Padre):
```jsx
// Le pasamos la prop "placeholder" con un valor
<Buscador placeholder="Escribe el libro..." />
```

En **Buscador.jsx** (Hijo):
```jsx
// Recibimos las props (usando destructuring { placeholder })
export default function Buscador({ placeholder }) {
  return (
    // Usamos el dato recibido
    <input type="text" placeholder={placeholder} />
  )
}
```

## 2. De Hijo a Padre (Callback / Función)
Para enviar información del hijo (`Buscador`) hacia arriba al padre (`Booklist`), el padre debe pasarle **una función** al hijo. El hijo ejecutará esa función enviando el dato como argumento.

**Ejemplo:** `Buscador` avisa a `Booklist` cada vez que el usuario escribe algo.

En **Booklist.jsx** (Padre):
```jsx
export default function Booklist() {
  
  // 1. Creamos la función que recibirá el dato
  const recibirBusqueda = (texto) => {
    console.log("El usuario busca:", texto);
    // Aquí actualizarías el estado para filtrar libros
  }

  return (
    // 2. Pasamos la función como prop (normalmente empieza por "on" o "handle")
    <Buscador onBuscar={recibirBusqueda} />
  )
}
```

En **Buscador.jsx** (Hijo):
```jsx
export default function Buscador({ onBuscar }) {
  
  const manejarCambio = (e) => {
    const textoEscrito = e.target.value;
    // 3. Ejecutamos la función del padre y le mandamos el dato
    onBuscar(textoEscrito); 
  }

  return (
    <input type="text" onChange={manejarCambio} />
  )
}
```
