import { arrArticulos } from "./modulos/articulos.mjs";

const mostrarArticulos= () => {
   console.log("Mostrando artículos");
    //console.log(arrArticulos);

  const container=document.createElement("div");
  const body=document.getElementsByTagName("body")[0];

  body.appendChild(container);
  
  arrArticulos.forEach(element => {
   
    const productCard=document.createElement("div");

    const title=document.createElement("h3");
    const price=document.createElement("p");
    const image=document.createElement("img");
    
    title.textContent=element.title;
    image.src=element.image;
    price.textContent=`${element.price} $`;



    productCard.appendChild(title);
    productCard.appendChild(image);
    productCard.appendChild(price);
    
    container.appendChild(productCard);

  });

}


const main=() =>{
  mostrarArticulos();
}

document.addEventListener("DOMContentLoaded",main)

