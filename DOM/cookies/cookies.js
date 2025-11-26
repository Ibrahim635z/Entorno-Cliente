
const devuelveCookie= (nombre) => {

    let name= nombre + "=";
    let decodedCookie= decodeURIComponent(document.cookie);
    let ca=decodedCookie.split("; ");
    const encontrarCookie = ca.find(cookie => cookie.startsWith(name));
    
    if (encontrarCookie) {   
        return encontrarCookie.substring(name.length); // asi me quedo con la subcadena a partir de mi name
    }
    return undefined;
    
    
    /* PRUEBAS FALLIDAS
    
    let valor;
    for (let i = 0; i < ca.length; i++) {
        const element = ca[i];
         if (element.includes(nombre)) {
            let result=element.split("=");
            valor=result[1];
        }
        return valor;
    }
    */
    /*console.log(ca[0]);
    let valor=""
    ca.forEach(element => {
        if (element.includes(nombre)) {
            let result=element.split("=");
            valor=result[1];
        }
        return valor;
    });*/
}

// CREACION DE COOKIE
const creaCookie= () => {
    document.cookie="usuario=Ibrahim";
    document.cookie="tema=oscuro";
}
// MOSTRAR COOKIE

const mostrarCookie= () =>{
    console.log("All cookies" + document.cookie);
    alert("All cookies " + document.cookie);

    let valorTema=devuelveCookie("tema");

    console.log("Valor obtenido:  " + valorTema);
}

// FUNCION CREAR COOKIE PARA UNOS DIAS DETERMINADOS
const fCrearCookie=(nombre,valor, diasExpiracion) => {
    let d= new Date();
    d.setTime(d.getTime() + (diasExpiracion*24*60*60*1000));
    let expiracion= "expires= " + d.toUTCString();
    document.cookie= nombre + "=" + valor + ";" + expiracion + ";path=/";
}

// FUNCION PRINCIPAL DE COOKIES
const mainCookies=() =>{

    console.log('All documents:' + document.cookie);

    document.getElementById("btnCrearCookie").addEventListener("click",creaCookie);
    document.getElementById("btnMostrarCookie").addEventListener("click",mostrarCookie);


}






const main= () => {
    mainCookies();
    fCrearCookie("Apellido","Perez",7);
}


document.addEventListener("DOMContentLoaded",main);