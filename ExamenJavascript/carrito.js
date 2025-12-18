

export class Carrito {
    constructor() {
        this.articulos=[];
    }

    add(elemento){
        this.articulos.push(elemento);
    }

    dibujarCarrito(){

        const fragment=document.createDocumentFragment();
        const divCarrito=document.createElement("ul");
        this.articulos.forEach(element => {
            
            

            const fila=document.createElement("li")

            fila.innerHTML=`

                ${element}
            
            `;

            divCarrito.appendChild(fila);
        });

        fragment.appendChild(divCarrito);

        return fragment;

    }
}