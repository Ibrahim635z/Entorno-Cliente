/**
 * Funcion que crea una clase de 3 alumnos
 * @returns clase
 */
function crearClase() {
     let clase = [
        {
          nombre: "Angel Garcia",
          edad: 20,
          notaPrimerTrimestre: 6,
          notaSegundoTrimestre: 7,
          notaTercerTrimestre: 10,
        },
        {
          nombre: "Pablo motos",
          edad: 30,
          notaPrimerTrimestre: 5,
          notaSegundoTrimestre: 6.5,
          notaTercerTrimestre: 9,
        },
        {
          nombre: "Alba Jimenez",
          edad: 40,
          notaPrimerTrimestre: 5.5,
          notaSegundoTrimestre: 7.5,
          notaTercerTrimestre: 8,
        },
      ];
      return clase;
}

/**
 * Ejercicio 2: Funcion que dado un numero y un trimestre , muestre la nota de ese trimestre
 * en caso de no poner un trimestre se mostrara la media de los 3 trimestres
 * @param {*} num 
 * @param {*} trimestre 
 * @returns 
 */

function devuelveNota(num,trimestre) {
    let clase=crearClase();

    switch (trimestre) {
        case 1:
            return clase[num].notaPrimerTrimestre;
        case 2:
            return clase[num].notaSegundoTrimestre;
          
        case 3:
            return clase[num].notaTercerTrimestre
            break;
        default:
            let media=(clase[num].notaPrimerTrimestre+clase[num].notaSegundoTrimestre+clase[num].notaTercerTrimestre)/3
            return media;
    }

}
/**
 * Ejercicio 3: Funcion que devuelve la edad media de la clase
 * @returns media
 */
function edadMedia() {
    let clase=crearClase();
    let media=0;
    
    for (let i = 0; i < clase.length; i++) {
        
        media+=clase[i].edad;
        
    }

    media=media/clase.length;


    return media;
}

/**
 * Ejercicio 4: Funcion que devuelve un nombre aleatorio de la clase.
 * @returns nombre
 */
function nombreRandom() {
    let clase=crearClase();
    let aleatorio=parseInt(Math.random()*clase.length); 

    return clase[aleatorio].nombre;

}

/**
 * Ejercicio 5: Funcion que genera 100 numeros entre 1 y 1000
 * Luego los divide en dos arrays de pares e impares,
 * Finalmente muestra el array incial
 */

function paresImpares() {
    let array=[];
    let arrayPar=[],arrayImpar=[];
    for (let i = 0; i < 100; i++) {
        
        array[i]=parseInt((Math.random()*1001)+1);
       
        if (array[i]%2==0) {
            arrayPar.push(array[i]);
    }else{
        arrayImpar.push(array[i]);
    }
        
    }

    console.log("El array incial: ",array);

    console.log("Los numeros pares: ",arrayPar);
    console.log("Los numeros impares: ",arrayImpar);

    console.log("Array inicial: ",array)

    
}
// EJERCICIO 7
/**
 * Funcion que vuelve a 0 todos los elementos del array
 * @param {*} array 
 * @returns 
 */
function elementosToZero(array) {
    for (let i = 0; i < array.length; i++) {
        array[i]=0;
        
    }
    return array;
}
/**
 * Funcion que añada 1 a cada elemento del array
 * @param {*} array 
 * @returns 
 */
function addUno(array) {
    
    for (let i = 0; i < array.length; i++) {
        array[i]=array[i]+1;
        
    }
    return array;
}

/**
 * Funcion que devuelve el array separado por espacios
 * @param {*} array 
 * @returns 
 */
function separateArray(array) {
    let arraySeparado=[...array].join(" ");

    return arraySeparado;
}

