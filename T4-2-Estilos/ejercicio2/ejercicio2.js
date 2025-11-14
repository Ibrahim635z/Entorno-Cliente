
let tamanioLetra;
const guardarConfig= () => {
    tamanioLetra=document.getElementById("p1").style.fontSize;
   console.log(tamanioLetra) // este console log no me aparece
}


const tamanio= () =>{

    document.getElementById("aumentar").addEventListener("click", () =>{

       const collection=document.querySelectorAll("p");

       collection.forEach(element => {
            
            let size=parseInt(element.style.fontSize);
            size+=2;
            console.log(size);
            element.style.fontSize=size + "px"; // cuando pongo size no funciona, si pongo un valor concreto si
       });
    })

    document.getElementById("decrementar").addEventListener("click", () =>{

       const collection=document.querySelectorAll("p");

       collection.forEach(element => {
            let size=parseInt(element.style.fontSize);
            size-=2;
            element.style.fontSize=size + "px";
       });
    })

    document.getElementById("defecto").addEventListener("click", () =>{

       const collection=document.querySelectorAll("p");

       collection.forEach(element => {
            element.style.fontSize=tamanioLetra;
       });
    })


}


const alinear= () => {

    document.getElementById("centrar").addEventListener("click" , ()=> {
        let collection = document.querySelectorAll("p");

        collection.forEach(element => {
            element.style.textAlign="center"
        });
    })

    document.getElementById("izquierda").addEventListener("click" , ()=> {
        let collection = document.querySelectorAll("p");

        collection.forEach(element => {
            element.style.textAlign="left"
        });
    })
}


const main=()=> {
    guardarConfig();
    tamanio();
    alinear();
}

document.addEventListener("DOMContentLoaded",main);