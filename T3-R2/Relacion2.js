/**
 * Ejercicio 1
 * Funcion que dado un array muestre el valor maximo el valor minimo y el valor medio
 */
function valores(array) {
    let max=array[0],min=array[0],medio=0;
    let resultado=[];
    
    for (let i = 0; i < array.length; i++) {
        
        if (array[i]>=max) {
            max=array[i];
        }


        if (array[i]<=min) {
            min=array[i];
        } 

        medio += array[i]
        
    }
    medio=medio/array.length;

    
    resultado.push(max,min,medio);
    return resultado;
}

/**
 * Ejercicio 2
 * Funcion que comprueba si un color esta dentro del array
 */

function comprobar(array,color) {
    
    for (let i = 0; i < array.length; i++) {
        if (array[i]==color) {
            return true;
        }
        
    }
    return false;
}
/**
 * Ejercicio 3
 * Funcion que genera un array con 20 numeros aleatorios
 */

function randomArray(array,n) {
    
    for (let i = 0; i < 20; i++) {
        

        let element=Math.floor((Math.random()*n)+1)

        array[i]=element
        
    }
    return array
}
/**
 * Ejercicio 4
 * Funciones que devuelven la union,interseccion y diferencia de dos array
 */

/**
 * Funcion que devuelve la interseccion entre 2 array
 * @param {*} array1 
 * @param {*} array2 
 * @returns 
 */
function interseccion(array1,array2) {
    let array3=[]
    for (let i = 0; i < array1.length; i++) {
        
        for (let j = 0; j < array2.length; j++) {
            
            if (array1[i]===array2[j]) {
                
                if (!array3.includes(array1[i])) {
                    array3.push(array1[i]);
                }
                break;
            }
            
        }
        
    }
    return array3

}
/**
 * Funcion que devuelve la union entre dos array
 * @param {*} array1 
 * @param {*} array2 
 * @returns 
 */
function union(array1,array2) {
   let array3=array1;
    for (let i = 0; i < array2.length; i++) {
        
        if (!array3.includes(array2[i])) {
            array3.push(array2[i]);
        }
        
        
    }
    

    return array3;

}
/**
 * Funcion para calcular la diferencia entre 2 arrays
 * @param {*} array1 
 * @param {*} array2 
 * @returns array3
 */
function diferencia(array1,array2) {
    let array3=[];
    for (let i = 0; i < array1.length; i++) {
        
        if (!array2.includes(array1[i])) {
            array3.push(array1[i]);
        }
        
    }

    for (let j = 0; j < array2.length; j++) {
        

        if (!array1.includes(array2[j])) {
            array3.push(array2[j]);
        }
        
    }

    return array3;
}


function ordenacionBurbuja(array) {
    
    let cambio;
    for (let i = 0; i < array.length; i++) {
        const elementI = array[i];
        
        for (let j = 0; j < array.length; j++) {
            const elementJ = array[j];

            if (elementJ>elementJ+1) {
               
            }
            
        }
    }
}
/**
 * Funcion que ordena una serie de nombres separados por ","
 * @param {*} nombres es un string de nombres separados por comas
 * @returns nombreOrdenado => el String ordenado.
 */
function ordenarNombres(nombres) {
    let nombreOrdenado;
    nombreOrdenado=nombres.split(",");
    nombreOrdenado.sort();
    return nombreOrdenado;
}

