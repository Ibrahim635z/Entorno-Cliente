
export class Carrito {
    constructor() {
        this.articulos=[];
    }

    add(elemento){
        this.articulos.push(elemento);
    }

    dibujarCarrito() {
    
        const fragment = document.createDocumentFragment();

        // Iterar sobre cada artículo y crear su representación DOM
        this.articulos.forEach(articulo => {
            // Suponemos que cada artículo es un objeto
            
            const divArticulo = document.createElement("div");
            //divArticulo.className = "item-carrito";
            
            divArticulo.innerHTML = `
                <p>Titulo: ${articulo.title}</p>
            `;
            
            fragment.appendChild(divArticulo);
        });

        return fragment;
    }
}