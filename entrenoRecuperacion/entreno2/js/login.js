


let usuarios= [];

const obtenerCredenciales= async () => {

    usuarios= await fetch("https://fakestoreapi.com/users").then(res => res.json());
    console.log(usuarios);
    const username=document.getElementById("name").value;
    const pass=document.getElementById("pass").value;

    const objetoUsuario={
        "name": username,
        "password": pass
    }

    valida(objetoUsuario);

}


const valida= (objUsuario) => {

    const name= objUsuario.name;
    const password=objUsuario.password;

    const usuarioEncontrado= usuarios.find(usuario => usuario.username===name && usuario.password=== password);

    if (usuarioEncontrado) {
        const objetUsuario={
            "id":usuarioEncontrado.id,
            "name":usuarioEncontrado.username,
            "email":usuarioEncontrado.email
        }
        localStorage.setItem("usuario", JSON.stringify(objetUsuario));
        window.location.href="index.html"
        return objetUsuario;
    }else{
        alert("usuario incorrecto")
        return null;
    }

}





const main = () => {
    document.getElementById("enviar").addEventListener("click", obtenerCredenciales);
}


document.addEventListener("DOMContentLoaded",main)