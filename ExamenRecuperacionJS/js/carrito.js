

export class Carrito {
    constructor() {
        this.articulos=[];
    }




    add(elemento){
        this.articulos.push(elemento);  
        console.log("entrando",elemento)
    }


    dibujarCarrito(){

        console.log("carrito...",this.articulos);
        const fragmento=document.createDocumentFragment();

        const titulo=document.createElement("h2");
        titulo.textContent=`Carrito de compra`;
        fragmento.appendChild(titulo);

        if (this.articulos.length==0) {
            
            const vacio=document.createElement("p");
            vacio.textContent="El carrito esta vacio";
            fragmento.appendChild(vacio);
            return fragmento;

        }
        

        const ul=document.createElement("ul");
         ;

        this.articulos.forEach(element => {
            const li=document.createElement("li");
            li.textContent=`${element.title}`
            console.log("elemento",element.title);
            ul.appendChild(li);
        });

       

        fragmento.appendChild(ul)

        
        const total=document.createElement("p");
        total.textContent=`El total de productos es: ${this.articulos.length}`
        fragmento.appendChild(total);

        return fragmento;


    }


}