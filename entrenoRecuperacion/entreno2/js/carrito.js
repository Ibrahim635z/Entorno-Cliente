


export class Carrito {
    constructor() {
        this.articulos = [];
    }

    add(titulo) {

        const articuloExistente=this.articulos.find(articulo => articulo.titulo==titulo);

        if (articuloExistente) {
            articuloExistente.cantidad++;
        } else {
            this.articulos.push({
                "titulo": titulo,
                "cantidad": 1
            })
        }

    }


    dibujaCarrito() {
        
        const fragmento = document.createDocumentFragment();

        // Creamos un título para el carrito y un contador
        const total = document.createElement("h3");
        total.textContent = `Total productos: ${this.articulos.length}`;
        fragmento.appendChild(total);

        // Creamos una lista para mostrar los nombres
        const lista = document.createElement("ul");
        
        this.articulos.forEach(item => {
            const li = document.createElement("li");
            li.textContent = `${item.titulo} (x${item.cantidad})`;
            lista.appendChild(li);
        
        });



        fragmento.appendChild(lista);
        
        // Retornamos el nodo completo listo para ser insertado
        return fragmento;
    }

}


