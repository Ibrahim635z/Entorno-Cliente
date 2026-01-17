import { Carrito } from "./carrito.js";


let productos=[];

let micarrito=new Carrito();

const comprobarUsuario= () => {

    const usuarioExiste=localStorage.getItem("usuario");
   
    if (!usuarioExiste) {
        window.location.href="examenLogin.html";
    }


}


const obtenerProductos= async () => {

    productos= await fetch("https://fakestoreapi.com/products").then(res=>res.json());

    if (productos) {
        creaCards(productos);
    }else{
        alert("no ha sido posible cargar los productos")
    }
}


const creaCards= (arrProductos) => {

    const divCards=document.getElementById("container");
    console.log(arrProductos);
    arrProductos.forEach(element => {
        
        divCards.appendChild(creaCard(element));
    });


}


const creaCard= (objProducto) => {

    const divCard=document.createElement("div");

    const title=document.createElement("h2");
    const image=document.createElement("img");
    const description=document.createElement("p");
    const price=document.createElement("p");
    const rating=document.createElement("p");
    const btn=document.createElement("button");
    btn.className="btn";
    
    
    
    btn.addEventListener("click",() => {

        

        console.log("añadiendo..",objProducto.title);
        micarrito.add(objProducto);
        
        document.getElementById("container").prepend(micarrito.dibujarCarrito());

    })
    

    btn.textContent="Añadir";
    
    title.textContent=objProducto.title;
    image.src=objProducto.image;
    description.textContent=objProducto.description;
    price.textContent=objProducto.price;
    rating.textContent=`Rating: rate: ${objProducto.rating.rate}  Count: ${objProducto.rating.count}`;



    divCard.appendChild(title);
    divCard.appendChild(image);
    divCard.appendChild(description);
    divCard.appendChild(price);
    divCard.appendChild(rating);
    divCard.appendChild(btn);

       
        
       
 


    return divCard;

}



const ObtenerFiltro= () => {

     document.getElementById("btn_filtrar").addEventListener("click",() => {

        const atributo= document.getElementById("atributo").value;
        const valor=document.getElementById("valor").value;
    
        if (valor) {
            const objFiltro={"atributo": atributo, "valor":valor };
            const filtrado=filtra(objFiltro);
            mostrarfiltrados(filtrado);
            
        }else{
            mostrarfiltrados(productos);
        }

     });

   
}


const filtra= (objFiltro) => {
   

    if (objFiltro.atributo==="price") {
        const filtrado=productos.filter(producto => producto.price < objFiltro.valor);
        return filtrado;
    } else if (objFiltro.atributo==="rate") {
        const filtrado=productos.filter(producto => producto.rating.rate < objFiltro.valor);
        return filtrado;
    } else if(objFiltro.atributo==="count"){
        const filtrado=productos.filter(producto => producto.rating.count < objFiltro.valor);
        return filtrado;
    }

}


const mostrarfiltrados = (arrProductos) => {

    const divFiltrado=document.getElementById("container");

   divFiltrado.innerHTML=""

    creaCards(arrProductos);

}


const devuelveGeneros= (arrobjProductos) => {
    let arrCategorias= [];

    arrobjProductos.forEach(element => {
        if (!arrCategorias.includes(element.category)) {
        arrCategorias.push(element.category);
    }
    });

    
    console.log(arrCategorias);
    return arrCategorias;
}


const main =  async () => {

    comprobarUsuario();
    await obtenerProductos();
    ObtenerFiltro();
    devuelveGeneros(productos);

  

}

document.addEventListener("DOMContentLoaded",main);