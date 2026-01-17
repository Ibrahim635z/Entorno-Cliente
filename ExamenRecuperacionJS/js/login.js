
let usuarios=[];

const obtenerCredenciales= async () => {

    usuarios= await fetch("https://fakestoreapi.com/users")
            .then(res=>res.json());

    const username=document.getElementById("username").value;
    const password=document.getElementById("password").value;

    const objUsuario={
        "user": username,
        "pass": password
    }

    valida(objUsuario)

}


const valida=(objUsuario) => {


    const usuarioEncontrado=usuarios.find(usuario => usuario.username===objUsuario.user && usuario.password===objUsuario.pass);


    if (usuarioEncontrado) {

        const objetoUsuario={
            "id": usuarioEncontrado.id,
            "email": usuarioEncontrado.email,
            "username": usuarioEncontrado.username
        }
        localStorage.setItem("usuario",JSON.stringify(objetoUsuario));
        window.location.href="datosExamen.html";


    }else{
        alert("no se ha encontrado el usuario");
        return null;
    }

}







const main = () => {
    document.getElementById("enviar").addEventListener("click",obtenerCredenciales);
    
}


document.addEventListener("DOMContentLoaded",main);
