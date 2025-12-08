import { get } from "./httpCliente.js";



/**
 * 
 * @param {*} array
 * Funcion que crea en base a un array todas las cartas de personaje 
 */


const Cards= array => {

    const container=document.createElement("div");
    const personajes=array.items;    
    console.log(personajes)
    document.body.appendChild(container);

    personajes.forEach(element => {
        const cardDiv=Card(element);

        container.appendChild(cardDiv);
    });

    
}
/**
 * 
 * @param {*} personaje 
 * @returns carDiv (carta del personaje) 
 */

const Card= personaje => {
     
    const cardDiv=document.createElement("div");
    cardDiv.classList.add("card-personaje"); 

    const name=document.createElement("h3");
    const gender=document.createElement("p");
    const image=document.createElement("img");
    const btn=document.createElement("button");
    btn.textContent="Comprar"
    
    name.textContent= personaje.name;
    gender.textContent= personaje.gender;
    image.src= personaje.image;

    cardDiv.appendChild(image);
    cardDiv.appendChild(name);
    cardDiv.appendChild(gender);
    cardDiv.appendChild(btn);

    btn.addEventListener("click", () => {
        alert("Comprando " + personaje.id);
    })

    let infoVisible=false;

    cardDiv.addEventListener("click",()=> {

        if (infoVisible) return;

        const personajeInfo=document.createElement("div")
        cardDiv.appendChild(personajeInfo);

        const informacion=document.createElement("h3");
        personajeInfo.appendChild(informacion);

        const specie=document.createElement("p");
        const status=document.createElement("p");

        personajeInfo.appendChild(specie);
        personajeInfo.appendChild(status);

        informacion.textContent="Informacion Adicional"
        informacion.style.textAlign="center"
        specie.style.textAlign="center"
        status.style.textAlign="center"
        specie.textContent= "Especie:  "+ personaje.species;
        status.textContent= "Estado: " + personaje.status;

        infoVisible=true;
    })

    return cardDiv;

};


const getFetch= (url) =>{
     get(url).then(json => Cards(json))
}

const main= () => {
    getFetch("https://futuramaapi.com/api/characters/");
}

document.addEventListener("DOMContentLoaded",main);