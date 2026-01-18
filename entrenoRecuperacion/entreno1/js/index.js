
let productos=[];

const usuarioExiste= () => {
    const usuario= localStorage.getItem("usuario");
    if(!usuario){
        window.location.href="login.html";
    }
}


const cargarProductos = async () => {
    
    const data= await fetch("https://thesimpsonsapi.com/api/characters").then(res => res.json());
    productos=data.results;
    console.log(productos);
        if (productos) {
            creaCards(productos);
        } else {
            console.log("no se a podido cargar los productos")
        }
        
    
}


const creaCards= (arrProductos) => {
    const contenedor=document.createElement("div");
    contenedor.id="container";
    arrProductos.forEach(element => {

        contenedor.appendChild(creaCard(element));
    });

    document.body.appendChild(contenedor);
}

const creaCard= (producto) => {
    const divCard= document.createElement("div");

    const age=document.createElement("p");
    const name=document.createElement("p");
    const image=document.createElement("img");


    age.textContent=producto.age;
    name.textContent=producto.name;
    image.src=producto.portrait_path;

    divCard.appendChild(age);
    divCard.appendChild(name);
    divCard.appendChild(image);

    return divCard;

}



const filtrarEnviados= () => {
    document.getElementById("btn_enviar").addEventListener("click", () =>{
        const atributo= document.getElementById("atributo").value;
        const valor= document.getElementById("valor").value;

        if (valor) {
            const filtrado= filtrar({"atributo":atributo,"valor":valor});
            mostrarFiltrado(filtrado);
        }else{
            mostrarFiltrado(productos);
        }
    })
}

const filtrar=(objFiltro) => {
    
    if (objFiltro.atributo==="edad") {
        const filtrado= productos.filter(producto => producto.age < objFiltro.valor);
        return filtrado;
    } else if(objFiltro.atributo==="id") {
        const filtrado=productos.filter(productos => productos.id == objFiltro.valor);
        return filtrado;
    }
}

const mostrarFiltrado= (arrProductos) => {
    const divFiltrado=document.getElementById("container");
    divFiltrado.innerHTML="";

    arrProductos.forEach(element => {
        divFiltrado.appendChild(creaCard(element));
    });

}


const main = () => {
    usuarioExiste();
    cargarProductos();
    filtrarEnviados();
    
}


document.addEventListener("DOMContentLoaded",main);