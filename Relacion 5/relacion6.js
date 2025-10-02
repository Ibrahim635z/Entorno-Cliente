/**
 * Funcion que dado un array nos devuelve ese array pero con un valor unico de cada elemento 
 */

function onlyUniques(args) {
    let newArray=[];


    for (let i = 0; i < args.length; i++) {
        
   
        if (!newArray.includes(args[i])) {
            
            newArray.push(args[i]);
        }
    }
    
   alert(`El nuevo array es: ${newArray}`);
    
}

/*
* Funcion que al obtener una serie de numeros los eleva al cuadrado y devuelve la suma de sus cuadrados 
*/

function squareAndSum(args) {

    let resultado=0;

    for (let i = 0; i < args.length; i++) {
        resultado+=args[i]**2;
    }
    alert(`La suma de sus cuadrados es: ${resultado}`)
    
}