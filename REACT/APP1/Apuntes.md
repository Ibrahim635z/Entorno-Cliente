# Apuntes de Análisis: Primera App en React (APP1)

---

## 1. Estructura General (Fuentes en `src`)

En React, todo el código fuente de la aplicación vive dentro de la carpeta `src`. React funciona creando una **jerarquía de componentes** (como un árbol), donde unos componentes contienen a otros.

### El Punto de Entrada: `main.jsx`

El archivo `src/main.jsx` es el **punto de partida** de tu aplicación React. Es el primer archivo que se ejecuta.

**¿Qué hace?**
1.  Busca un elemento `div` con `id="root"` en tu archivo `index.html`.
2.  "Inyecta" toda tu aplicación de React dentro de ese `div`.
3.  Renderiza el componente principal, que en este caso has definido como `<Pruebas />`.

```jsx
// src/main.jsx
import Pruebas from "./pages/Pruebas.jsx";

// Aquí React toma el control del elemento 'root' del HTML y le dice:
// "Dentro de ti voy a pintar el componente <Pruebas />"
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Pruebas />
  </StrictMode>
);
```

---

## 2. Los Componentes y el Flujo de Datos

React se basa en **componentes**. Un componente es una función que "devuelve" HTML (escrito en una sintaxis llamada JSX).

### A. La Página: `src/pages/Pruebas.jsx`

Este componente actúa como una "página" o contenedor principal para tu vista de pruebas.

**¿Qué hace?**
- Su única función es importar y mostrar otro componente más complejo llamado `<GridProductos />`.
- Sirve para mantener el código ordenado: `main.jsx` llama a la página, y la página llama al contenido.

---

### B. El Grid (Contenedor de Lista): `src/components/GridProductos.jsx`

Este es el "cerebro" de esta pequeña sección. Aquí es donde ocurre la magia de conectar los datos con la vista.

**Variables y Datos:**
- **`import db from "../json/db.json";`**: Aquí estás importando los datos. React es capaz de importar archivos JSON directamente y convertirlos en variables (Arrays u Objetos) listos para usar.
  - **¿De dónde sale la variable?** Del archivo local `db.json`. Ahora la variable `db` es un **Array** de productos.

**Lógica (El `map`):**
En React, para mostrar una lista de cosas, no usamos bucles `for`, usamos el método `.map()`.

```jsx
// src/components/GridProductos.jsx

// Recorremos el array 'db'. Por cada 'producto' que encuentre en el json...
{db.map((producto) => {
  // ...devuelve un componente <CardProductos />
  return <CardProductos key={producto.id} producto={producto} />;
})}
```

- **`key={producto.id}`**: **¡Importante!** Cuando haces un `.map` en React, siempre debes darle una propiedad única llamada `key` a cada elemento. Esto ayuda a React a saber qué elemento es cuál si la lista cambia (se ordena, se borra uno, etc.). Usamos el `id` porque es único.
- **`producto={producto}`**: Esto es una **Props** (Propiedad). Le estamos **pasando datos** del padre (`GridProductos`) al hijo (`CardProductos`). Le estamos diciendo: "Toma, hijo, aquí tienes toda la información de *este* producto en concreto para que la pintes".

---

### C. La Tarjeta (Presentación): `src/components/CardProductos.jsx`

Este componente es "tonto" (presentacional). No sabe de dónde viene la lista completa, solo sabe pintar **un** producto.

**Props:**
```jsx
// src/components/CardProductos.jsx
// Recibe la propiedad 'producto' que le mandó el padre (GridProductos)
export default function CardProductos({ producto }) { ... }
```
Lo que ves entre llaves `{ producto }` se llama **desestructuración**.

> **¿Por qué las llaves? (Duda muy común)**
>
> Tu intuición te dice: "Si le paso un producto, la función debería recibir `producto`".
> Pero **React NO funciona así**.
>
> React **SIEMPRE** empaqueta **TODOS** los atributos que le pasas al componente dentro de un **único Objeto** (llamado `props`).
>
> Mira la diferencia:
>
> 1.  **Sin desestructurar (Forma larga):**
>     Si escribes `function CardProductos(props)`, la variable `props` será un objeto así: `{ producto: { id: 1, title: ... } }`.
>     Tendrías que usarlo así: `props.producto.title`. ¡Es más largo!
>
> 2.  **Desestructurando (Forma corta y limpia):**
>     Al escribir `function CardProductos({ producto })`, le estás diciendo a JS: "Del objeto enorme que me envías, saca solo la propiedad `producto` y dámela directamente".
>     Así puedes usar `producto.title` directamente.

**Uso de la variable:**
Ahora que tiene la variable `producto` (que es un objeto del array JSON), simplemente accede a sus datos para rellenar el HTML:

- `{producto.title}`: Pinta el título.
- `{producto.image}`: Pinta la URL de la imagen.

---

## 3. La Base de Datos: `src/json/db.json`

Este archivo actúa como tu base de datos local.
- Es un archivo de texto en formato JSON.
- Contiene un **Array** `[ ... ]` lleno de **Objetos** `{ ... }`.
- Cada objeto representa un producto con `id`, `title`, `price`, `image`, etc.

**¿Por qué se usa?**
En una aplicación real, estos datos vendrían de un servidor (una API). Para aprender y probar (como en este ejercicio), usamos un archivo JSON local (`db.json`) para simular que tenemos esos datos y poder trabajar en la interfaz sin depender de internet o un servidor real.

---

## Resumen del Flujo de la App

1.  **Vite** arranca y carga `main.jsx`.
2.  `main.jsx` pinta `<Pruebas />`.
3.  `Pruebas.jsx` pinta `<GridProductos />`.
4.  `GridProductos.jsx`:
    - Lee el fichero `db.json`.
    - Por cada producto en el JSON, crea un `<CardProductos />` y le pasa los datos.
5.  `CardProductos.jsx` recibe los datos y pinta el HTML final (Foto, Título, Precio) que ves en pantalla.

---

## 4. Cómo ver el resultado (Usando Vite)

Para ver esta aplicación funcionando en tu navegador, necesitas un entorno que entienda React. Para eso usas **Vite**.

**Pasos para abrirlo:**

1.  Abre una terminal (consola) en la carpeta de tu proyecto:
    `c:\Users\chakr\Desktop\GRADO SUPERIOR\SEGUNDO\Entorno-Cliente\REACT\APP1`
2.  Escribe el comando para instalar las dependencias (solo la primera vez, o si borras `node_modules`):
    ```bash
    npm install
    ```
3.  Escribe el comando para arrancar el servidor de desarrollo:
    ```bash
    npm run dev
    ```
4.  Vite mostrará un mensaje en la terminal parecido a:
    `➜  Local:   http://localhost:5173/`
5.  Mantén presionada la tecla **Ctrl** y haz **click** en ese enlace (`http://localhost:5173/`), o cópialo y pégalo en tu navegador (Chrome, Edge, etc.).

¡Ahí verás tu aplicación funcionando!

---

## 5. Comienzo Simple: Cómo empezar una App React de 0

Si quisieras crear una "APP2" desde cero absoluta, y tener el equivalente a un `index.html` y un `main.js` "en blanco" para empezar a construir, esto es lo **mínimo imprescindible** que necesitas.

### Paso 1: Crear el Proyecto (El cascarón)
React necesita herramientas para funcionar (enpaquetar, convertir JSX a JS, etc). Vite te da todo esto hecho.
En la terminal, carpeta donde quieras la app:
```bash
npm create vite@latest nombre-de-tu-app -- --template react
cd nombre-de-tu-app
npm install
```
*Esto crea carpetas y archivos. Puedes borrar lo que hay dentro de `src` si quieres empezar con el folio en blanco.*

### Paso 2: Los 3 Archivos Base
Para que React pinte algo en pantalla, solo necesitas **3 archivos** clave conectados entre sí. Es tu "esqueleto" mínimo.

#### 1. El HTML (`index.html`)
Está en la raíz. Solo necesita tener un `div` donde React se "agarrará". Por convención, usamos id `root`.

```html
<!DOCTYPE html>
<html lang="en">
  <body>
    <!-- AQUÍ se montará tu App -->
    <div id="root"></div>
    <!-- Script que arranca todo -->
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

#### 2. El "Enchufe" (`src/main.jsx`)
Es el puente entre el HTML y React. Importa tu componente principal (App) y lo enchufa al div `root`.

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx' // <--- Importamos nuestro componente principal
import './index.css' // (Opcional) Si quieres estilos globales

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App /> {/* <--- Aquí arranca tu componente */}
  </StrictMode>,
)
```

#### 3. Tu Componente Principal (`src/App.jsx`)
Aquí es donde empiezas a escribir **TU** código. Es tu "lienzo en blanco".

```jsx
// src/App.jsx
import { useState } from 'react'

function App() {
  // Aquí va tu lógica (Javascript, variables, estados)

  return (
    // Aquí va lo que se ve (JSX / HTML)
    <div>
      <h1>¡Hola Mundo!</h1>
      <p>Aquí empieza mi App2.</p>
      {/* Aquí irías poniendo tus otros componentes: <MiBoton />, <MiLista />, etc. */}
    </div>
  )
}

export default App
```

### Resumen
Si quieres empezar limpio:
1. Crea el proyecto con Vite.
2. Ve a `src/App.jsx` y **borra todo** lo que trae de ejemplo.
3. Escribe tu función `App` básica (como la de arriba).
4. ¡Listo! A partir de ahí, vas creando nuevos archivos en `src/components`, los importas en `App.jsx` y los usas. Es como un Lego: `App` es la base verde y vas poniendo piezas encima.
