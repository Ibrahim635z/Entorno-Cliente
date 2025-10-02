function esPalindromo(cadena) {
    
    // let arrayCadena=cadena.split("");
    // let inversa=arrayCadena.reverse();
    
    // let palindromo=inversa.join("");
   // otra forma de hacerlo
    for (let i = 0, j=cadena.length-1; i < cadena.length/2; i++,j--) {
        
        if (cadena[i]!=cadena[j]) {
            return false;
        }
    }

    return true;
}


/**
 * Ejercicio 2
 */

function miSplit(scad) {
    let array=[];
    let cont=0;
    for (let i = 0; i < scad.length; i++) {
        if (scad[i]==" ") {
            
            array[cont] += scad.substring(0,i);
            cont++;
            scad=scad.substring(i,scad.length);
            
        }   
        
    }
    array[cont]=scad;


    alert(array);
}


/**
 * Ejercecio 3
 * cadena contiene subcadena
 */

function comprobarSubcadena(cadena,subcadena) {
 
  
        let tamanioSubcadena=subcadena.length

        
        for (let i = 0; i < cadena.length; i++) {
              let cont=0;
            for (let j = 0; j < subcadena.length; j++) {
                if (cadena[i+j]==subcadena[j]) {
                    cont++;
                }
                
            }
           if (cont === tamanioSubcadena) {
            alert("Si contiene la subcadena");
            return;
            }
            
        }         
         alert("Si contiene la subcadena");
        
    }
    
   
        
