import { Carrito } from "./carrito.js";

let usuarios=[];
let productos=[];

/**
 * Funcion asincrona que me pertime optener el json de los usuarios y almacenarlos en un array de objetos usuarios
 */
async function getFetchUsuarios() {
    let datosUsuarios= await fetch("https://fakestoreapi.com/users");

    usuarios=await datosUsuarios.json();

    //console.log(usuarios)
}

/**
 * Funcion asincrona que me pertime optener el json de los productos y almacenarlos en un array de objetos productos
 */
async function getFetchProductos() {
    let datosProductos= await fetch("https://fakestoreapi.com/products");

    productos=await datosProductos.json();

    //console.log(productos)
}


/**
 * Funcion que valida si el usuario y contraseña introducidos son correctos o no buscandolo en el array de usuarios
 * @param {*} objUsuario 
 * @returns devuelve un objeto usuario con id email y surname si existe el usuario, si no devuelve null
 */

const valida= (objUsuario) => {

    let user=objUsuario.user;
    let password=objUsuario.password;
    
    let usuariosEncontrado= usuarios.find(usuario => usuario.username===user && usuario.password===password);

    if (usuariosEncontrado) {
        
        let objetoUsuario={
            id: usuariosEncontrado.id,
            email: usuariosEncontrado.email,
            username: usuariosEncontrado.username,
        }

        sessionStorage.setItem("user",user);
        sessionStorage.setItem("password",password)
        window.location.href="datosExamen.html";

        return objetoUsuario;
    }else{
        alert("usuario no encontrado")
        return null;
    }
}

/**
 * 
 * @returns Funcion que obtiene los datos de sesion, si existe se mantiene pero si no existe te redirige al login.
 */
const compruebaUsuario= () => {

    let user=sessionStorage.getItem("user");
    let password=sessionStorage.getItem("password");

    if (window.location.pathname.includes("examenLogin.html")) {
        return;
    }

    if (!user || !password) {
        window.location.href="examenLogin.html"
    }
}


/**
 * Funcion que recibe un objeto producto y crea una carta individual de ese producto
 * @param {*} objProducto 
 * @returns devuelve dicha carta de producto
 */
const creaCard= (objProducto) => {

    const divCard=document.createElement("div");

    const title=document.createElement("h3");
    const image=document.createElement("img");
    const price=document.createElement("p");
    
    divCard.id=objProducto.id;

    title.textContent=objProducto.title;
    image.src=objProducto.image;
    price.textContent=objProducto.price;
   

    divCard.appendChild(title);
    divCard.appendChild(image);
    divCard.appendChild(price);
    

    return divCard;

}

/**
 * Funcion que recibe un array de objetos de productos y los recorre dibujandolos uno a uno 
 * @param {*} arrObjProductos 
 */
const creaCards= (arrObjProductos) => {
    const container=document.getElementById("container");
    arrObjProductos.forEach(element => {
        const divCard=creaCard(element);
        container.appendChild(divCard);
    });
}

/**
 * Funcion que dado un objeto filtro que tiene atributo valor devuelve los objetos cuyo valor maximo sea el pasado como parametro
 * @param {*} objFiltro 
 * @returns devuelve un array de esos productos filtrados 
 */
const filtra = (objFiltro) => {

    let atributo=objFiltro.atributo;
    let valor=objFiltro.valor;

    let arrProductosFiltrados=productos.filter(producto => producto[atributo] < valor);

    return arrProductosFiltrados;
    
}

/**
 * Funcion que recibe un array de objetos y devuelve un array con las categorias que existen sin repetirse.
 * @param {*} arrObjProductos 
 * @returns devuelve dicho array.
 */
const devuelveGeneros= (arrObjProductos) => {
    let arrCategorias=[];

    arrObjProductos.forEach(element => {
        if (!arrCategorias.includes(element.category)) {

            arrCategorias.push(element.category);
    
        }
    });

    return arrCategorias;
}

const main = async () => {

    await getFetchUsuarios();
    await getFetchProductos();

    const boton=document.getElementById("boton");
    // comprobamos si existe boton para ejecutar esta parte solo en el login
    if (boton) {
        
        boton.addEventListener("click",(event) => {

            event.preventDefault();

            let user=document.getElementById("user").value;
            let password=document.getElementById("password").value;

            let objUsuario={
                user: user,
                password: password,
            }

            valida(objUsuario);
        })  
    }
    // funcion que realizamos siempre para comprobar si el usuario tiene credenciales para iniciar sesion
     compruebaUsuario();

     const container=document.getElementById("container");
    // comprobamos que existe este div para solo realizar esta parte del codigo cuando estemos en datosExamen.html
     if (container) {
        
        creaCards(productos);

        let btnFiltrar=document.getElementById("btnFiltrar");
        
        // usando el objeto boton filtrar filtramos solo el precio, 
        // no filtra rating no he sido capaz de acceder a esos datos
        btnFiltrar.addEventListener("click", () => {

            let opcion=document.getElementById("select").value;
            let valor=document.getElementById("valor").value;
            let objFiltro2={
                atributo: opcion,
                valor: valor,
            }

            console.log("filtrando..",filtra(objFiltro2));
        })

        

       

       console.log(devuelveGeneros(productos));

       // Parte del carrito
       // consigo crear el carrito pero no se como acceder a el click de la imagen de ese divcard concreto
       
        const containerCarrito=document.getElementById("carrito");
        let carrito1=new Carrito();
        carrito1.add(productos[1].title);
        

        

        containerCarrito.appendChild(carrito1.dibujarCarrito());


        console.log(container);



     }


}


document.addEventListener("DOMContentLoaded",main)