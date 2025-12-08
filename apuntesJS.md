# Apuntes de JavaScript - Entorno Cliente

Estos apuntes resumen los conceptos clave de manipulación del DOM y métodos de Arrays utilizados en tus ejercicios.

## 1. DOM (Document Object Model) y Nodos

El DOM es la representación estructurada del documento HTML que permite a JS acceder y manipular su contenido.

### Acceso a Elementos
*   **`document.getElementById("id")`**: Selecciona un elemento por su atributo `id`.
    ```javascript
    const contenedor = document.getElementById("contenedor");
    ```
*   **`document.querySelector(".clase")`**: Selecciona el primer elemento que coincida con el selector CSS.
*   **`document.querySelectorAll("selector")`**: Selecciona **todos** los elementos que coincidan con el selector CSS y devuelve una `NodeList` (parecido a un array, pero no lo es exactamente).
    ```javascript
    // Seleccionar todos los inputs y textareas
    const inputs = document.querySelectorAll("input, textarea");
    
    // Recorrer la colección
    inputs.forEach(input => {
        input.style.border = "1px solid red";
    });
    ```

### Creación y Manipulación de Nodos
*   **`document.createElement("etiqueta")`**: Crea un nuevo nodo elemento HTML.
    ```javascript
    const nuevoP = document.createElement("p");
    const div = document.createElement("div");
    ```
*   **`document.createDocumentFragment()`**: Crea un fragmento de documento ligero para añadir múltiples elementos al DOM de una sola vez (mejora el rendimiento).
    ```javascript
    const fragment = document.createDocumentFragment();
    // ... añadir elementos al fragment ...
    container.appendChild(fragment);
    ```
*   **`textContent`**: Establece o devuelve el contenido de texto de un nodo.
    ```javascript
    nuevoP.textContent = `Hola Mundo`;
    ```
*   **`innerHTML`**: Establece o devuelve el contenido HTML (cuidado con la seguridad XSS). Útil para limpiar un contenedor.
    ```javascript
    container.innerHTML = ""; // Limpia el contenedor
    ```
*   **`appendChild(nodo)`**: Añade un nodo como el último hijo de un nodo padre.
    ```javascript
    contenedor.appendChild(nuevoP);
    ```

### Estilos y Eventos
*   **`element.style.propiedad`**: Modifica estilos CSS en línea.
    ```javascript
    div.style.border = "1px solid black";
    div.style.display = "flex";
    ```
*   **`addEventListener("evento", callback)`**: Escucha eventos (clicks, cambios, carga).
    ```javascript
    // Evento Click
    div.addEventListener("click", () => {
        console.log("Has hecho click");
    });

    // Evento Change (para selects o inputs)
    select.addEventListener("change", () => {
        const valor = select.value;
    });

    // Evento DOMContentLoaded (cuando el HTML ha cargado)
    document.addEventListener("DOMContentLoaded", main);
    ```

## 2. Métodos de Arrays y Strings

Funciones esenciales para trabajar con datos.

### Transformación de Cadenas a Arrays
*   **`split(separador)`**: Divide un string en un array de substrings.
    ```javascript
    let nombreCompleto = "Juan Perez Garcia";
    let arrayNombre = nombreCompleto.split(" "); // ["Juan", "Perez", "Garcia"]
    
    let fecha = "2023-10-05";
    let partesFecha = fecha.split("-"); // ["2023", "10", "05"]
    
    let palabra = "Hola";
    let letras = palabra.split(""); // ["H", "o", "l", "a"]
    ```

### Modificación de Arrays
*   **`splice(inicio, cantidadBorrar, elementosInsertar...)`**: Cambia el contenido de un array eliminando o agregando elementos. **Modifica el array original**.
    ```javascript
    let frutas = ["Manzana", "Banana", "Pera"];
    
    // Eliminar 1 elemento desde el índice 1
    frutas.splice(1, 1); // Elimina "Banana" -> ["Manzana", "Pera"]
    
    // Insertar elementos
    frutas.splice(1, 0, "Uva", "Naranja"); // En pos 1, borra 0, añade Uva y Naranja
    
    // Reemplazar
    let palabras = ["Hola", "Mundo", "Cruel"];
    palabras.splice(2, 1, "Hermoso"); // Reemplaza "Cruel" por "Hermoso"
    ```

### Transformación y Recorrido (Programación Funcional)
*   **`map(callback)`**: Crea un **nuevo array** con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
    ```javascript
    const numeros = [1, 2, 3];
    const dobles = numeros.map(num => num * 2); // [2, 4, 6]
    
    // Ejemplo con objetos (extraer una propiedad)
    const estudiantes = [{id: 1, name: "Ana"}, {id: 2, name: "Luis"}];
    const nombres = estudiantes.map(est => est.name); // ["Ana", "Luis"]
    ```
*   **`forEach(callback)`**: Ejecuta la función indicada una vez por cada elemento. No devuelve nada.
    ```javascript
    estudiantes.forEach(element => {
        const div = document.createElement("div");
        div.textContent = element.name;
        contenedor.appendChild(div);
    });
    ```
*   **`filter(callback)`**: Crea un **nuevo array** con todos los elementos que cumplan la condición.
    ```javascript
    const productos = [{cat: "A", val: 10}, {cat: "B", val: 20}, {cat: "A", val: 30}];
    const productosA = productos.filter(p => p.cat === "A"); 
    // [{cat: "A", val: 10}, {cat: "A", val: 30}]
    ```

### Ordenación
*   **`sort(callback)`**: Ordena los elementos de un array **in situ** (modifica el original) y devuelve el array.
    *   **Por defecto**: Ordena como strings (alfabéticamente).
        ```javascript
        let nombres = ["Juan", "Ana", "Pedro"];
        nombres.sort(); // ["Ana", "Juan", "Pedro"]
        ```
    *   **Números**: Necesita una función de comparación `(a, b) => a - b`.
        ```javascript
        let numeros = [10, 2, 5];
        numeros.sort((a, b) => a - b); // [2, 5, 10] (Ascendente)
        numeros.sort((a, b) => b - a); // [10, 5, 2] (Descendente)
        ```
    *   **Objetos**: Comparar por una propiedad.
        ```javascript
        let items = [{precio: 100}, {precio: 50}];
        items.sort((a, b) => a.precio - b.precio); // Ordena por precio ascendente
        ```

### Otros
*   **`join(separador)`**: Une todos los elementos de un array en una cadena.
    ```javascript
    let arr = ["Hola", "Mundo"];
    let str = arr.join(" "); // "Hola Mundo"
    ```

## 3. Almacenamiento en el Navegador

Persistencia de datos en el cliente.

### LocalStorage
Almacena datos de forma indefinida (hasta que se borren manualmente o por código). Solo guarda **strings**.
*   **`setItem(clave, valor)`**: Guardar datos.
    ```javascript
    localStorage.setItem("usuario", "Juan");
    // Para objetos, usar JSON.stringify
    const user = { id: 1, name: "Juan" };
    localStorage.setItem("userObj", JSON.stringify(user));
    ```
*   **`getItem(clave)`**: Recuperar datos.
    ```javascript
    const nombre = localStorage.getItem("usuario");
    // Para objetos, usar JSON.parse
    const userObj = JSON.parse(localStorage.getItem("userObj"));
    ```
*   **`removeItem(clave)`**: Borrar un dato específico.
*   **`clear()`**: Borrar todo el localStorage.

### Cookies
Datos pequeños que se envían al servidor con cada petición. Tienen fecha de caducidad.
*   **Crear/Modificar**:
    ```javascript
    document.cookie = "username=Juan; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/";
    ```
*   **Leer**: `document.cookie` devuelve un string con todas las cookies separadas por `;`. Es tedioso de parsear manualmente, por lo que se suelen usar funciones auxiliares o `split('; ')`.

## 4. Asincronía y Peticiones de Red (Fetch)

Para pedir datos a servidores externos (APIs).

### Fetch API
*   **Promesas (`.then`, `.catch`)**:
    ```javascript
    fetch("https://fakestoreapi.com/products")
        .then(response => {
            if (!response.ok) throw new Error("Error en la red");
            return response.json(); // Convertir respuesta a JSON
        })
        .then(data => {
            console.log(data); // Aquí tienes los datos
        })
        .catch(error => {
            console.error("Hubo un problema:", error);
        });
    ```

*   **Async / Await** (Sintaxis moderna, más limpia):
    ```javascript
    async function obtenerProductos() {
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            if (!response.ok) throw new Error("Error HTTP: " + response.status);
            
            const data = await response.json();
            console.log(data);
            
            // Ejemplo: Pintar en el DOM
            data.forEach(prod => {
                const p = document.createElement("p");
                p.textContent = prod.title;
                document.body.appendChild(p);
            });
            
        } catch (error) {
            console.error("Error al obtener productos:", error);
        }
    }
    

    obtenerProductos();
    ```

## Validación de Usuarios con JSON (Estilo JsonServer)

Este tutorial explica cómo validar usuarios importando un archivo JSON localmente (usando la sintaxis moderna de atributos de importación) y cómo persistir la sesión usando `localStorage` para que los datos estén disponibles al redirigir al `index.html`.

### 1. Estructura de Archivos
Asegúrate de tener tu archivo `db.json` con los usuarios y que tu script en el HTML tenga `type="module"`.

**HTML (login.html):**
```html
<script type="module" src="./main.js"></script>
```

### 2. Importación de Datos
Usamos la sintaxis `with {type: 'json'}` para importar el JSON directamente como un objeto JavaScript.

```javascript
// main.js
import db from './db/db.json' with {type: 'json'};
```

### 3. Lógica de Validación y LocalStorage
El proceso consiste en:
1.  Escuchar el evento del formulario (o botón).
2.  Buscar el usuario en el array importado.
3.  Si existe, **guardar en LocalStorage** y redirigir.

```javascript
const comprobarSesion = () => {
    const boton = document.getElementById("boton"); // Asegúrate de tener este ID en tu HTML

    boton.addEventListener("click", (event) => {
        event.preventDefault(); // Evita que el formulario se envíe y recargue la página

        const usuarioInput = document.getElementById("user").value;
        const passwordInput = document.getElementById("password").value;

        // Buscar usuario en la base de datos simulada (db.json)
        // Asumimos que db.students es el array de usuarios
        const usuarioEncontrado = db.students.find(u => u.name === usuarioInput);

        if (usuarioEncontrado) {
            // --- AQUÍ ESTÁ LA CLAVE ---
            // 1. Guardamos el usuario en LocalStorage antes de irnos.
            // Convertimos el objeto a string porque LocalStorage solo guarda texto.
            localStorage.setItem("usuarioLogueado", JSON.stringify(usuarioEncontrado));

            // 2. Redirigimos al index
            window.location.href = 'index.html'; 
        } else {
            alert("Usuario o contraseña incorrectos");
        }
    });
}

// Inicializar
document.addEventListener("DOMContentLoaded", comprobarSesion);
```

### 4. Recuperar Datos en Index (Opcional)
Una vez en `index.html`, puedes recuperar los datos así:

```javascript
// index.js (o script del index)
const usuarioGuardado = localStorage.getItem("usuarioLogueado");

if (usuarioGuardado) {
    const usuario = JSON.parse(usuarioGuardado);
    console.log("Bienvenido, " + usuario.name);
} else {
    // Si no hay usuario, quizás quieras devolverlo al login
    window.location.href = 'login.html';
}
```

## 5. Uso de JSON Server (Fake REST API)

Para simular una API real y no leer el archivo localmente como un objeto estático, usamos `json-server`. Esto permite hacer peticiones HTTP reales (`fetch`, `POST`, `PUT`, etc.).

### Instalación y Ejecución
No necesitas instalarlo globalmente si usas `npx`. Ejecuta este comando en la terminal, asegurándote de estar en la carpeta raíz donde está tu carpeta `db` (ej. `Entorno-Cliente/JsonServer`):

```bash
# Ejecuta json-server observando el archivo db/db.json
npx json-server@0.17.4 --watch db/db.json --port 3000
```
> **Nota**: Usamos la versión `0.17.4` que es la estándar estable. Versiones más recientes (beta/alpha) a veces cambian la sintaxis.

Una vez ejecutado, verás en la terminal que el servidor está corriendo en `http://localhost:3000` y lista tus recursos (ej. `/students`).

### Ejemplo de Validación con Fetch
En lugar de importar el JSON con `import ... from ...`, ahora usamos `fetch` para pedir los datos asíncronamente.

```javascript
/*
  Ejemplo: Validar usuario contra el servidor json-server.
  Asume que tienes un formulario con inputs id="user" y id="password".
*/
const comprobarSesion = async (event) => {
    event.preventDefault(); // Evitar recarga del form

    const usuarioInput = document.getElementById("user").value;
    
    try {
        // 1. Pedimos los datos al servidor (GET)
        const response = await fetch("http://localhost:3000/students");
        
        if (!response.ok) {
            throw new Error("No se pudo conectar con el servidor");
        }
        
        const usuarios = await response.json(); // Convertimos respuesta a array
        
        // 2. Buscamos coincidencias
        const usuarioEncontrado = usuarios.find(u => u.name === usuarioInput);
        
        if (usuarioEncontrado) {
            // LOGIN CORRECTO
            console.log("Usuario encontrado:", usuarioEncontrado);
            
            // Guardamos sesión
            localStorage.setItem("usuarioLogueado", JSON.stringify(usuarioEncontrado));
            
            // Redirigimos
            window.location.href = 'index.html';
        } else {
            // LOGIN INCORRECTO
            alert("Usuario no existe en la base de datos");
        }

    } catch (error) {
        console.error("Error crítico:", error);
        alert("Error de conexión. Asegúrate de que json-server está corriendo.");
    }
}

// Asignar al botón o formulario
document.getElementById("boton").addEventListener("click", comprobarSesion);
```
