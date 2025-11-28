


const mostrarDatos= () => {

    const enlaces= document.getElementsByTagName("a");

    const numEnlaces=enlaces.length ;

    console.log(`La pagina tiene ${numEnlaces} enlaces`);

    const penultimoEnlace=enlaces[enlaces.length-2];
    const direccionPenultimo=penultimoEnlace.href;

    console.log("El penultimo enlace de la pagina apunta a: ", direccionPenultimo);

    let cont=0;
    for (const element of enlaces) {
        if (element.href=="https://www.google.es/") {
            
            cont++;
        }
    }

    console.log(`Hay ${cont} enlaces que apuntan a google`);

    const parrafos=document.getElementsByTagName("p");
    const aParrafo=parrafos[2].getElementsByTagName("a");
    console.log(`En el Parrafo ${parrafos.length} hay ${aParrafo.length} enlaces`);
}


const main = () => {

    mostrarDatos();

}


document.addEventListener("DOMContentLoaded",main);