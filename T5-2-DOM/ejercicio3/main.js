const pintarImagen = (celda, numero) => {
    if (numero === "") {
        celda.className = "vacia"; // Clase CSS que quita la foto
        return;
    }

    celda.className = ""; // Quitamos la clase vacía si la tiene
    
    // Matemáticas para saber dónde cortar la foto (suponiendo celdas de 100px)
    // El número 1 está en fila 0, col 0. El 6 en fila 1, col 1.
    const tamanoCelda = 100; 
    const valor = parseInt(numero);
    
    // Calculamos la posición original de ese trozo de foto
    const filaOriginal = Math.floor((valor - 1) / 4);
    const colOriginal = (valor - 1) % 4;

    // Movemos el fondo: -X hacia la izquierda, -Y hacia arriba
    const posX = colOriginal * -tamanoCelda;
    const posY = filaOriginal * -tamanoCelda;

    celda.style.backgroundPosition = `${posX}px ${posY}px`;
}

const generarNumerosUnicos=() => {
    const arrayNumeros=[];
    
    
    do {
        
    const random=Math.floor(Math.random() * 15) + 1;

    if (!arrayNumeros.includes(random)) {
    
        arrayNumeros.push(random);
    }


    } while (arrayNumeros.length<15);

    arrayNumeros.push("");
    return arrayNumeros;
    
}



const rellenar= () => {

    const td=document.getElementsByTagName("td");
    const arrayNumeros=generarNumerosUnicos();
    let i=0;
    for (const element of td) {
        
        element.textContent=arrayNumeros[i];
        pintarImagen(element, arrayNumeros[i]);
        i++;

        console.log(element)
    }

}

const obtenerCoordenadas = (id) => {
    
    const numero = parseInt(id.replace("casilla", ""));
    
    const fila = Math.floor((numero - 1) / 4);
    const columna = (numero - 1) % 4;

    return { fila, columna };
}


const sonAdyacentes = (coord1, coord2) => {
    const distanciaFila = Math.abs(coord1.fila - coord2.fila);
    const distanciaColumna = Math.abs(coord1.columna - coord2.columna);

    // Para ser adyacentes, la suma de distancias debe ser exactamente 1
    return (distanciaFila + distanciaColumna) === 1;
}

const movimiento = () => {
    
    const casillas = document.getElementsByTagName("td");

    for (const casilla of casillas) {
        casilla.addEventListener("click", (evento) => {
            const casillaClickada = evento.target;
            
            // Si la casilla clickada está vacía, no hacemos nada
            if (casillaClickada.textContent === "") return;

            
            // Convertimos la colección HTML a Array para usar .find()
            const todasLasCasillas = Array.from(document.getElementsByTagName("td"));
            const casillaVacia = todasLasCasillas.find(td => td.textContent === "");

            
            const coordsClick = obtenerCoordenadas(casillaClickada.id);
            const coordsVacia = obtenerCoordenadas(casillaVacia.id);

            
            if (sonAdyacentes(coordsClick, coordsVacia)) {
                console.log(`Moviendo ${casillaClickada.id} al hueco en ${casillaVacia.id}`);
                
                const valorClick = casillaClickada.textContent;
               
                casillaVacia.textContent = casillaClickada.textContent;
                casillaClickada.textContent = "";

                pintarImagen(casillaVacia, valorClick); // La vacía ahora tiene foto
                pintarImagen(casillaClickada, "");      // La clickada ahora es blanca
                
               
            } else {
                console.log("Movimiento no válido");
            }
        });
    }
}


const main= () => {
    rellenar();
    movimiento();
}


document.addEventListener("DOMContentLoaded",main);