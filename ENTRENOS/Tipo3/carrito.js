

export class Carrito{
    constructor(){
        this.personajes=[];
     }

     add(elemento){
        this.personajes.push(elemento);
     }

     dibujarCarrito(){


        const fragment=document.createDocumentFragment();

        this.personajes.forEach(element => {
            
            const divPersonaje=document.createElement("div");

            divPersonaje.innerHTML=`
            
               <p> Nombre Personaje: ${element} </p>
            `;

            fragment.appendChild(divPersonaje);
        });

        return fragment;
     }
}