/*
        1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
        2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
        3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
        4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

        VIDEO 34
        */
    

const cuentaCaracteres = cadena => console.log(cadena.length);

const recortar= (cadena,num) => console.log(cadena.substring(0,num));

const creaArray= (cadena,texto) => console.log(cadena.split(texto));

const repetir= (cadena,num) => {
    let result="";
    for (let i = 0; i < num; i++) {
        result+=" "+cadena;
    }
    console.log(result);
}

const main= () => {
    // ejercicio 1
    cuentaCaracteres("hola mundo");
    
    //ejercicio 2
    recortar("hola mundo",4);

    // ejercicio 3
    creaArray("hola que tal"," ");
    //ejercicio 4
    repetir("hola mundo",3)
}

document.addEventListener("DOMContentLoaded",main);