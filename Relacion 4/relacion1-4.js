//ejercicio 1
/**
 * Muestra el resultado de una suma de parametros que le pasamos
 * @param  {...any} args 
 * @returns 
 */
function sum(...args) {
  let resultado = 0;
  for (let i = 0; i < args.length; i++) {
    resultado += args[i];
  }
  return resultado;
}
// ejercicio 2
/**
 * Funcion que solo suma los numeros de una serie de argumentos
 * @param  {...any} args 
 * @returns 
 */
function addOnlyNums(...args) {
  let resultado = 0;
  for (let i = 0; i < args.length; i++) {
    if (!isNaN(args[i])) {
      resultado += args[i];
    }
  }
  return resultado;
}
// ejercicio 3
/**
 * Funcion que cuenta los argumentos que le vamos pasando
 * @param  {...any} args 
 * @returns 
 */
function countTheArgs(...args) {
  let resultado = 0;
  for (let i = 0; i < args.length; i++) {
    resultado++;
  }
  return resultado;
}

// ejercicio 4
/**
 * Funcion que combina 2 arrays
 *
 */
 function combineTwoArrays(arr1, arr2) {
            let combinedArray = [];

            for (let i = 0; i < arr1.length; i++) {
                combinedArray.push(arr1[i]);
            }

            for (let i = 0; i < arr2.length; i++) {
                combinedArray.push(arr2[i]);
            }
            
            return combinedArray;
        }

// ejercicio 5


// ejercicio 6
/**
 * Funcion que comprueba si un numero es divisible entre 3
 
 */
function divisible(numero) {
    let divisible=true;
    if(numero%3==0){
        divisible=true;
    }else {
        divisible=false;
    }
    return divisible;
}

// ejercicio 7
/**
 * Funcion que comprueba si dos numeros son divisibles entre ellos
 
 */
function divisibleEntre(num1,num2) {
    let divisibleEntre=true;
    if (num1%num2===0) {
        divisibleEntre=true;
    } else {
        divisibleEntre=false;
    }
    return divisibleEntre;
}

/**
 * Ejercicio 8 Function that check if two numbers are between one range
 */

function rangeCheck(value,infRange,supRange) {
  
    if (value<=supRange && value>=infRange) {

      alert(`Yes the number ${value} is between ${infRange} and ${supRange}`);
      
    }else{
      alert(`No the number ${value} is not between ${infRange} and ${supRange}`);
    }



}

/**
 * Ejercicio 9 Funcion que comprueba si el numero introducido tiene 3 digitos
 */

function TresDigitos(value) {
  // uso el valor absoluto del numero para no tener que poner un intervalo entre -99 y 99
  if (Math.abs(value)) {
    alert(`El numero ${value} tiene  3 digitos o mas`);
  } else {
    alert (`El numero ${value} no tiene 3 digitos o mas`);
    
  }
}

/**
 * ejercicio 10 funcion que calcula el area de un rectangulo a partir de sus lados
 */

function areaRectangulo(lado1,lado2) {
  let area=lado1*lado2;
  alert(`El area del rectangulo es: ${area} metros cuadrados`);
}

/**
 * Ejercicio 11 Funcion que calcula el imc de una persona
 */

function Imc(peso,altura) {
  let alturaCuadrado=altura^2;
  let resultado=peso/alturaCuadrado;
  alert(`Tu IMC es de: ${resultado}`);
  
}

/**
 * Ejercicio 12 funcion que calcula el precio final de un producto al aplicarle un descuento
 */

function Descuento(precioInc,discount) {
  
  let precioFin=precioInc-(precioInc*(discount/100));

  alert(`El precio final es de: ${precioFin}`);
  
}

/**
 * Ejercicio 13 Funcion que calcula el factorial de un numero
 */

function Factorial(num) {
  let resultado=1;
  for (let i = num; i > 0; i--) {
    
    resultado*=i;
  }
  alert(`El ${num}! es: ${resultado}`);
}

/**
 * Ejercicio 14 Funcion que calcula si dos numeros son divisibles entre ellos
 */

function areDivisible(dividendo,divisor) {

  if (dividendo%divisor==0) {
    alert(`${dividendo} y ${divisor} son divisibles entre ellos`);
  } else {
     alert(`${dividendo} y ${divisor} no son divisibles entre ellos`);
  }
  
}