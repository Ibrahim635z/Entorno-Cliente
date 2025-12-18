import { Carrito } from "./carrito.js";


let users=[];
let characters=[];
async function fetchCharacters() {
    let datos= await fetch("https://futuramaapi.com/api/characters")
    characters= await datos.json();

}

async function fetchUsuarios() {

    let datos=await fetch("https://futuramaapi.com/api/users")
    users= await datos.json();
    
}


const valida= (name,surname) => {

    let usuarioEncontrado=users.items.find(usuario => usuario.name===name && usuario.surname===surname);

    if (usuarioEncontrado) {
        let objUsuario={
            id: usuarioEncontrado.id,
            name:usuarioEncontrado.name,
            surname:usuarioEncontrado.surname,
        }

        sessionStorage.setItem("name",name);
        sessionStorage.setItem("surname",surname);
        window.location.href="datosExamen.html";

        return objUsuario;
    }else{
        alert("usuario no encontrado")
        return null;
    }



}

const pruebaUsuario= () => {
    let valorSession= sessionStorage.getItem("name");
    let valorSession2= sessionStorage.getItem("surname");

    if (window.location.pathname.includes("examenLogin.html")) {
        return;
    }

    if (!valorSession || !valorSession2) {
        window.location.href="examenLogin.html"
    }
}


const creaCard=(objpersonaje) => {

    const divcard=document.createElement("div");
    const name=document.createElement("h3");
    const gender=document.createElement("p");
    const status=document.createElement("p");
    const species=document.createElement("p");
    const image=document.createElement("img");

    divcard.className="card";
    divcard.id=objpersonaje.id;
    name.textContent=objpersonaje.name;
    gender.textContent=objpersonaje.gender;
    status.textContent=objpersonaje.status;
    species.textContent=objpersonaje.species;
    image.src=objpersonaje.image;


    divcard.appendChild(image);
    divcard.appendChild(name);
    divcard.appendChild(gender);
    divcard.appendChild(status);
    divcard.appendChild(species);

    return divcard;


}

const creaCards=(arrpersonajes) => {
    let container=document.getElementById("container");
    arrpersonajes.items.forEach(element => {

        const divCard=creaCard(element);

        container.appendChild(divCard)

    });
}


const filtra= (objFiltro) => {
    let atributo=objFiltro.atributo;
    let valor=objFiltro.valor;
    console.log(characters.items.filter(personaje => personaje[atributo] === valor))
}


const devuelveEspecies= (arrpersonajes) => {
    let arrEspecies=[];
    arrpersonajes.items.forEach(element => {
        if (!arrEspecies.includes(element.species)) {

            arrEspecies.push(element.species);
            
        }
    });
    return arrEspecies;
}

const main = async () => {
    await fetchUsuarios();
    await fetchCharacters();

    const boton=document.getElementById("boton");

    if (boton) {

        boton.addEventListener("click",(event)=> {

            event.preventDefault();

            const name=document.getElementById("name").value;
            const surname=document.getElementById("surname").value;
            valida(name,surname);


        })
        
    }
    pruebaUsuario();

    const container=document.getElementById("container");
    if (container) {
        
        creaCards(characters);
        const objFiltro={atributo:"species",valor:"HUMAN"}

        filtra(objFiltro);

        console.log(devuelveEspecies(characters));


        const carrito1=new Carrito();

        const cards=document.querySelectorAll(".card");

        

        cards.forEach(element => {
            
            
            element.addEventListener("click",()=>{
               
                const nombre=element.querySelector("h3").textContent.trim();

                carrito1.add(nombre);
                console.log("nombre:" , nombre);
                carrito1.dibujarCarrito();
                
            })
        });

        



    }

}

document.addEventListener("DOMContentLoaded",main);




let userss=[];

async function fetchUsers() {
    let datos= await fetch("")
    userss=await datos.json();

}

const main2= async () =>{
    await fetchUsers();
    
}