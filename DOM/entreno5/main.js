const recorrerNodo=(nodo)=> {
    console.log("Recorrer nodo:", nodo);
    // node.childNodes.forEach(element => {
    //     console.log(child);
    // });

    for(let hijo of nodo.children){
        console.log(hijo);
    }
    
}

const recorrerNodoRecursivo= (nodo) => {
    
    for(let hijo of nodo.children){
        
            console.log(hijo);    
            recorrerNodoRecursivo(hijo);
        
    
    }
}


const informacionNodo=(nodo) => {
    console.log("Informacion del nodo:",nodo);
    console.log("Tipo de nodo",nodo.nodeType);
    console.log("Nombre del nodo:",nodo.nodeName);
    console.log("Valor del nodo:",nodo.nodeValue);
    console.log("Numero de hijos:",nodo.childNodes.length);
    console.log("Contenido del nodo:",nodo.textContent);


    // obtenemos todos los tipos de nodo
    console.log("Primer hijo:",nodo.firstChild);
    console.log("Ultimo hijo:",nodo.lastChild);
    console.log("nodo padre:",nodo.parentNode);
    console.log("nodo siguiente:",nodo.nextSibling);
    console.log("nodo anterior:",nodo.previousSibling);

    // metodos dpara obtener solo lso nodos de tipo element
    console.log("Primer hijo(elemento):",nodo.firstElementChild);
    console.log("Ultimo hijo(elemento):",nodo.lastElementChild);
    console.log("nodo siguiente(elemento):",nodo.nextElementSibling);
    console.log("nodo anterior(elemento)",nodo.previousElementSibling);
}

const main= () => {
    informacionNodo(document.getElementById("lista"));
    //recorrerNodo(document.getElementById("lista"));
    recorrerNodoRecursivo(document.getElementById("lista"));
}

document.addEventListener("DOMContentLoaded",main);