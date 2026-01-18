
let characters=[]



const credenciales = async () => {

    const data=await fetch("https://thesimpsonsapi.com/api/characters").then(res=> res.json());
    characters=data.results;
    const nombre=document.getElementById("nombre").value;
    const pass=document.getElementById("pass").value;

    const objetoUsuario= {
        "nombre": nombre,
        "password": pass
    }

    valida(objetoUsuario);
}


const valida= (objetoUsuario) => {

    const nombre=objetoUsuario.nombre;
    const pass=objetoUsuario.password;

    const usuarioEncontrado=characters.find(usuario => usuario.id== pass && usuario.name== nombre)

    if (usuarioEncontrado) {
        const usuario= {"id":usuarioEncontrado.id, "nombre":usuarioEncontrado.name, "status":usuarioEncontrado.status}
        localStorage.setItem("usuario", JSON.stringify(usuario));
        window.location.href="index.html";
        return usuario;
    }else {
        alert("usuario no encontrado");
        return null
    }
}

const main= () => {

    document.getElementById("enviar").addEventListener("click", credenciales)

}


document.addEventListener("DOMContentLoaded", main);