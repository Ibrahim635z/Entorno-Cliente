import { Carrito } from "./carrito.js";



let productos=[];

const miCarrito = new Carrito();

const comprobarUsuario= () => {
    const usuario= localStorage.getItem("usuario");

    if (!usuario) {
        window.location.href="login.html"
    }
}


const obtenerProductos = async () => {

    productos=await fetch("https://fakestoreapi.com/products").then(res=>res.json());
    if (productos) {
        creaCards(productos);
    }else{
        alert("no se han podido cargar los productos")
    }
    
}

const actualizarCarrito= (producto) =>{
    
    miCarrito.add(producto.title);

    let divCarrito=document.getElementById("carrito-display");

    if (!divCarrito) {
        divCarrito=document.createElement("div");
        divCarrito.id="carrito-display";
        document.body.prepend(divCarrito);
    }
    divCarrito.innerHTML = "<h3>Contenido del Carrito</h3>";
    
    divCarrito.appendChild(miCarrito.dibujaCarrito());

    

    btnEliminar.addEventListener("click",() =>{
        miCarrito.eliminar();
    })

}

const creaCards= (arrProductos) => {

    const containerProductos=document.getElementById("container");
    
    containerProductos.innerHTML="";
    arrProductos.forEach(element => {
        containerProductos.appendChild(creaCard(element));
    });

    document.body.appendChild(containerProductos);

}

const creaCard= (objProducto) => {

    const divCard=document.createElement("div");

    const title=document.createElement("h2");
    const image=document.createElement("img");
    const price=document.createElement("p");
    const rating=document.createElement("p");
    const button=document.createElement("button");
    

    button.addEventListener("click",() => actualizarCarrito(objProducto));

    
    
    button.textContent="Añadir al carrito";
    title.textContent=objProducto.title;
    image.src=objProducto.image;
    price.textContent=objProducto.price;
    rating.textContent = "Rating: Rate: "+ objProducto.rating.rate + " - Count: " + objProducto.rating.count;


    divCard.appendChild(title);
    divCard.appendChild(image);
    divCard.appendChild(price);
    divCard.appendChild(rating);
    divCard.appendChild(button);


    return divCard;

}

const filtrarEnviado= () => {
    document.getElementById("btn_filtrar").addEventListener("click", () => {

        const atributo=document.getElementById("atributo").value;
        const valor=document.getElementById("valor").value;

        if (valor) {
            const objFiltro= {"atributo":atributo,"valor":valor};
            const arrFiltrado=filtra(objFiltro);
            mostrarFiltrado(arrFiltrado);
        }else{
            mostrarFiltrado(productos);
        }
    })
}

const filtra= (objFiltro) => {
    if (objFiltro.atributo=="price") {
        const arrFiltrado=productos.filter(producto => producto.price < objFiltro.valor);
        return arrFiltrado;
    }else if (objFiltro.atributo=="rate") {
        const arrFiltrado=productos.filter(producto =>producto.rating.rate < objFiltro.valor);
        return arrFiltrado;
    }else if (objFiltro.atributo=="count") {
        const arrFiltrado=productos.filter(producto =>producto.rating.count < objFiltro.valor);
        return arrFiltrado;
    }
}

const mostrarFiltrado= (arrProductos) => {
    const divFiltrado=document.getElementById("container");
    divFiltrado.innerHTML="";
    creaCards(arrProductos);
}



const devuelveGeneros= (arrayProductos) => {
    let arrCategorias=[];

    arrayProductos.forEach(element => {
        if (!arrCategorias.includes(element.category)) {
            arrCategorias.push(element.category);
        }
    });
    console.log(arrCategorias);
    return arrCategorias;
}





const main = async () => {
    comprobarUsuario();
    await obtenerProductos();
    filtrarEnviado();
    devuelveGeneros(productos)



}


document.addEventListener("DOMContentLoaded",main);