/**
 * Ejercicio 1
 * @param {*} num1 
 * @param {*} num2 
 * @returns 
 */
let sum=(num1,num2) => num1 + num2 ;


/**
 * Ejercicio 2
 * @param {*} str 
 * @returns 
 */
let stringLength = str => console.log(`the length of "${str}" is:`, str.length);

/**
 * Ejercicio 3
 * @param {*} str 
 * @returns 
 */
let stringLength2 = str => {
    let length = str.length; 
    console.log(`the length of "${str}" is:`, length) ;
    return str.length; 
}


let showAlert= name => alert(alerts[(Math.floor(Math.random()*alerts.length))] + `, ${name}!`) ;
