import db  from './db/db.json' with {type: 'json'};

const mostrar= (db) =>{
    const arrEstudiantes=db.students;
    console.log(arrEstudiantes);
}
const comprobarSesion= () => {

    boton.addEventListener("click",(event)=>{

        event.preventDefault();

        const usuario=document.getElementById("user");
        const password=document.getElementById("password");
        const usuarioValor=usuario.value;
        //const passwordValor=password.value;
        
       
        const usuarioEncontrado = db.students.find(usuario => usuario.name === usuarioValor);

          
    if(usuarioEncontrado){
        window.location.href='http://127.0.0.1:5500/JsonServer/index.html'
        
    }else{
        alert("usuario o contraseña incorrectos")
    }


    })
    
} 

const main= () => {
    mostrar(db);
    comprobarSesion();

}

document.addEventListener("DOMContentLoaded",main);