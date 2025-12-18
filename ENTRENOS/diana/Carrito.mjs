/**
 * Creamos la clase carrito 
 */
export class Carrito {
    /**
     * Crea una instancia carrito
     * @param {Array} arCesta Pasamos un array
     */
    constructor(arCesta) {
        this.articulos = arCesta;
    }

    /**
     * Añade un producto a la cesta
     * @param {object} elemento Se le pasa un producto
     */
    add(elemento) {
        this.articulos.push(elemento)
    }

    /**
     * Devuelve un nodo DOM y previementa limpia el carrito
     * @returns Un nodo DOM con los elementos del carrito en forma de lista 
     */
    dibujaCarrito() {
        document.getElementById("carrito").innerHTML = "";
        const carrito = document.createElement('ul')
        this.articulos.forEach(articulo => {
            const linea = document.createElement('li');
            linea.textContent = articulo.title;
            carrito.appendChild(linea)
        });
        return carrito;
    }
}