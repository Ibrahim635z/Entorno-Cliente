/**
 * Ejercicio 1
 * Funcion que dada 4 valores devuelva el maximo de ellos
 * @params 
 * 
 */
function maximum(num1,num2,num3,num4) {
    
    return Math.max(num1,num2,num3,num4);
}

/**
 * Ejercicio 2 y 3
 * Funcion que simula el lanzamiento de un dado 
 */

function lanzamiento() {
    return Math.floor((Math.random()*6)+1)
}

/**
 * Ejercicio 4
 * Funcion que calcula el volumen de una esfera dado su radio
 */

function volumen(radio) {
    let v
    v=(4/3)*Math.PI*radio**3;
    return v;
}

/**
 * Ejercicio 5
 * Funcion que calcule el area de un circulo
 */

function areaCirculo(radio) {
    let area
    area=Math.PI*radio**2
    return area;
}
/**
 * Ejercicio 6
 * Funcion que calcule potencias de un modo recursivo
 */

function potenciasRecursivo(num,potencia) {
    if (potencia==0) {
        return 1
    }
    return potenciasRecursivo(num,potencia-1)*num
}

/**
 * Ejercicio 7
 * Funcion que calcule el factorial de un numero dado
 */

function factorialRecursivo(num) {
    if (num==1) {
        return 1
    }
    return factorialRecursivo(num-1)*num
}