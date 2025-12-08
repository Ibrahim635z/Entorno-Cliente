import { get } from "./httpCliente.js";

function MostrarDatos(arDatos) {

    document.body.innerHTML = "";
    const container = document.createElement("div");
    
    container.classList.add("products-container"); 
    document.body.appendChild(container);

    arDatos.forEach(element => {
        const productoDiv = document.createElement("div");
        const titulo = document.createElement("h3");
        const precio = document.createElement("p");
        const image = document.createElement("img");

        titulo.textContent = element.title;
        precio.textContent = `${element.price}$`;
        image.src = element.image;

        productoDiv.appendChild(image);
        productoDiv.appendChild(titulo);
        productoDiv.appendChild(precio);

        container.appendChild(productoDiv);

        // Variable para controlar si ya se mostró la info
        let infoVisible = false;

        productoDiv.addEventListener("click", () => {
            
            // Evitar que se creen infinitos divs si das click muchas veces
            if (infoVisible) return; 

            const divInfo = document.createElement("div");
            productoDiv.appendChild(divInfo);

            const infoTitulo = document.createElement("h3");
            divInfo.appendChild(infoTitulo);

            const infoGeneral = document.createElement("p");
            divInfo.appendChild(infoGeneral);

            infoTitulo.textContent = "Informacion Adicional";
           
            infoGeneral.textContent = `
                Nombre: ${element.title}
                Valoración: ${element.rating.rate} 
                Categoría: ${element.category}
            `;
            
            infoVisible = true; // Marcamos que ya se ve
        });
    });
}

function getFetch() {
    fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(json => MostrarDatos(json))
        .catch(error => console.log(error));
}

function getFetchV3(url) {
    get(url).then(json => MostrarDatos(json))
}

const main = () => {
    //getFetch();
    getFetchV3("https://fakestoreapi.com/products");
}

document.addEventListener("DOMContentLoaded", main);