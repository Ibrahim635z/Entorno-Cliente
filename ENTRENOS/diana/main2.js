import { Carrito } from "./Carrito.mjs";

/**
 * Funcion que crea una card
 * @param {object} obProd Objeto de tipo Producto
 * @returns un nodo DOM de la card de cada producto
 */
const CreaCard = (obProd) => {
    //Creamos el contenedor principal
    const card = document.createElement('div');
    card.className = 'card';
    card.id = obProd.id;

    //Creamos los elementos de la card
    const titulo = document.createElement('h3');
    const imagen = document.createElement('img');
    const descripcion = document.createElement('p')
    const precio = document.createElement('p')
    const rating = document.createElement('p')

    //Rellenamos con el contenido del objeto
    titulo.textContent = obProd.title
    imagen.src = obProd.image
    descripcion.textContent = obProd.description
    precio.textContent = obProd.price + "€"
    rating.textContent = obProd.rating['rate'] + " | " + obProd.rating['count']

    //Unimos los elementos al div principal
    card.appendChild(titulo);
    card.appendChild(imagen)
    card.appendChild(descripcion)
    card.appendChild(precio)
    card.appendChild(rating)

    return card;
}

/**
 * Crea todas las cards y las muestra en la página web
 * @param {Array} arrayProductos Le pasamos un array de productos
 */
const CreaCards = (arrayProductos) => {
    document.getElementById("productos").innerHTML = "";
    arrayProductos.forEach(producto => {
        let card = CreaCard(producto)
        document.getElementById("productos").appendChild(card);
    });
}

/**
 * Filtra según X atributo de tipo númerico
 * @param {arrayCarrito} arProductos El array de productos
 * @param {object} obFiltro Un objeto {atributo, valor}
 * @returns devuelve un nuevo array con los productos fitrados
 */
const Filtra = (arProductos, obFiltro) => {
    const atributo = obFiltro.atributo;
    const valor = obFiltro.valor;

    return arProductos.filter(producto => {
        let valorComparar;
        if (atributo == 'rating.rate') {
            valorComparar = producto.rating.rate
        } else if (atributo == 'rating.count') {
            valorComparar = producto.rating.count
        } else {
            valorComparar = producto[atributo]
        }
        return valorComparar <= valor
    })
}

/**
 * Devuelve las categorias existentes de una tienda 
 * @param {Array} arProductos Un array de productos 
 * @returns Un array con las categorias de los productos
 */
const DevuelveGeneros = (arProductos) => {
    const arCategorias = [];
    arProductos.forEach(producto => {
        if (!arCategorias.includes(producto.category)) {
            arCategorias.push(producto.category)
        }
    });
    return arCategorias;
}

const main = () => {
    if (localStorage.getItem("user")) {
        // Llamamos a la api
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                // Creamos las cards con los datos
                CreaCards(data)

                // console.log(Filtra(data, { atributo: "rating.rate", valor: 3 }))
                // console.log(DevuelveGeneros(data))

                // Le damos funcionalidad al filtro, cuando se envie el formulario
                document.getElementById("filtrar").addEventListener("click", (event) => {
                    event.preventDefault();

                    const atributo = document.getElementById("filtro").value;
                    const valor = document.getElementById("valor").value;

                    // Filtamos por el atributo y valor elegidos en el formulario y volvemos a mostrar las cards
                    const arProdFiltrados = Filtra(data, { atributo: atributo, valor: valor })
                    CreaCards(arProdFiltrados)
                })

                // Funcionalidad carrito
                const almacenado = localStorage.getItem("carrito");

                // 2. Convertir el string a array (si existe), o usar array vacío
                const arrayCarrito = almacenado ? JSON.parse(almacenado) : [];

                // 3. Crear el carrito con el array
                let c1 = new Carrito(arrayCarrito);

                document.getElementById("carrito").appendChild(c1.dibujaCarrito())
                let tarjetas = document.querySelectorAll('.card');
                tarjetas.forEach(card => {
                    card.addEventListener("click", () => {
                        let producto = data.find(({ id }) => id == card.id);
                        c1.add(producto)

                        // 4. Guardar el carrito actualizado en localStorage
                        localStorage.setItem("carrito", JSON.stringify(c1.articulos));
                        document.getElementById("carrito").appendChild(c1.dibujaCarrito())
                    })
                });
            })
    } else {
        location.href = "examenLogin.html"
    }

}

document.addEventListener('DOMContentLoaded', main)