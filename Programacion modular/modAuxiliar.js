/** 
* @name filterNumbersGreaterThan 
* @description Filtra los números de un array que sean mayor a cierto número 
x dejando solo los que sean menores a este 
* 
* @param {number[]} numbers - Array de números a filtrar 
* @param {number} filter - Número a partir del cuál filtrar los demás número
 s 
* @returns {Number[]} - Array de números filtrados menores a {filter} 
* 
* @example 
*  filterNumbersGreaterThan([3, 8, 12, 1, 7, 4], 7) // returns [3, 1, 4] 
*/ 

let filterNumbersGreaterThan= (numbers,filter) => {
    let array=[];
    for (let i = 0; i < numbers.length; i++) {
        const element= numbers[i];

        if (element<filter) {
            array.push(element);
        }
        
    }

    return array;
}


/** 
* @name toHackerSpeak 
* @description Convierte un string a "Hacker Speak". Para hacerlo, tiene que 
transformar las "a" en 4, las "e" en 3, las "i" 
* en 1, las "o" en 0 y las "s" en 5 
* 
* @param {string} text  
* @returns {String} - El texto convertido a "Hacker Speak" 
*  
* @example 
*  toHackerSpeak("I'm a hacker now") // returns "1'm 4 h4ack3r n0w" 
*/


let toHackerSpeak = texto => {
    
    let result = texto.split('');
    
    for (let i = 0; i < result.length; i++) {
        let element = result[i]; 
        
        switch (element) {
            case "a":
            case "A":
                result[i] = "4"; 
                break;
            case "e":
            case "E":
                result[i] = "3"; 
                break;
            case "i":
            case "I":
                result[i] = "1"; 
                break;
            case "o":
            case "O":
                result[i] = "0"; 
                break;
            case "s":
            case "S":
                result[i] = "5"; 
                break;
            default:
                
                break;
        }
    }
    
    return result.join('');
}




/** 
* @name getFileExtension 
* @description Obtiene la extensión de un archivo 
* 
* @param {string} file - El nombre del archivo a obtener la extensión  
* @returns {String} - La extensión del archivo 
 *  
 * @example 
 *  getFileExtension("imagen.jpg") // returns "jpg" 
 */ 
 
let getFileExtension= file => {
    
    let extension=file.split('.');
    return extension.pop(); // con pop obtengo el ultimo elemento del array por si tiene varios "." el archivo
    
    }


/** 
 * @name flatArray 
 * @description Dado un array 2D, devuelve un array 1D que contiene todos los 
ítems  
 * 
 * @param {[][]} arr - Array 2D a "aplanar"  
 * @returns {[]} - El array "aplanado" 
 *  
 * @example 
 *  flatArray([[1, 5, 4], [3, 10], [2, 5]]) // returns [1, 5, 4, 3, 10, 2, 5] 
 */ 
 

let flatArray= array2d => {
    let array=[];
    for (let i = 0; i < array2d.length; i++) {
        

        for (let j = 0; j < array2d[i].length; j++) {
            
            array.push(array2d[i][j]);
            
        }
        
    }

    return array;
}


/** 
 * @name removeDuplicates 
 * @description Remueve duplicados de un array  
 * 
 * @param {[]} arr - Array con duplicados a remover 
 * @returns {[]} - El array resultante sin duplicados 
 *  
 * @example 
 *  removeDuplicates([4, 5, 10, 4, 10, 2]) // returns [4, 5, 10, 2] 
 */ 


let removeDuplicates= arr => new Set(arr);
    


/** 
 * @name countLetter 
 * @description Devuelve la cantidad de veces que una letra aparece en un str
 ing  
 * 
 * @param {string} letter - Letra a contar 
 * @param {string} text - Texto sobre el que realizar la cuenta de {letter} 
 * @returns {Number} - Número de veces que aparece {letter} en {text} 
 *  
 * @example 
 *  countLetter("a", "javascript") // returns 2 
 */ 

 
let countLetter= (letter,text) => text.split(letter).length-1;


/** 
* @name removeWords 
* @description Dado un string y un array de palabras a remover, devuelve el 
string sin las palabras removidas 
* 
* @param {string} str - Texto a recortar  
* @param {string[]} words - Palabras a remover 
* @returns {string} - Texto resultante con las palabras removidas 
*  
* @example 
*   removeWords("This is a really bad test", ["really", "bad"]) // returns 
"This is a test" 
*/ 

let removeWords= (str,words) => {
    let result=str;
    for (let i = 0; i < words.length; i++) {
        const element = words[i];

        result=result.split(element).join("");
        
    }
    return result;
}