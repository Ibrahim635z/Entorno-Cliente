// usar document.forms para obtener los formularios mirar su github


const expresionRegular= () => {

    const texto="51001";

    const regexNumero= /^\d+$/;
    const regexNumeroDecimal= /^\d+(\.\d+)?$/;

    if (regexNumero.test(texto)) {
        console.log(`${texto} es un numero valido`)
    } else {
        console.log(`${texto} no es un numero valido`)
    }



}

const busqueda=() => {

    const numero= /fo+/g;
    const cadena="table football, foosball";
    let array;

    while ((array=numero.exec(cadena)) !== null) {
        console.log(`Encontrado ${array[0]}. Empieza en la posicion ${numero.lastIndex}.`)
    }

}



const main= () => {

    expresionRegular();
    busqueda();
}


document.addEventListener("DOMContentLoaded",main)