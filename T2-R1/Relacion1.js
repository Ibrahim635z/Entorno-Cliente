//Siempre debes crear el  objeto new Date() para usar sus metodos y aplicarlos 

/**
 * Ejercicio 1
 * Funcion que muestra el numero de dias que quedan desde hoy hasta Navidad (19 Diciembre)
 */

function hastaNavidad() {
  const hoy= new Date();
  const anioActual=hoy.getFullYear();
  const navidad= new Date(anioActual,11,19);

// Uso gettime() ya que usa como referencia una fecha del 1970

  const diferencia=navidad.getTime()-hoy.getTime(); // me lo devuelve en milisegundos

  const convertidorDias=Math.round(diferencia / (1000*60*60*24));


    alert(`Para navidad quedan ${convertidorDias} Dias`);

}

/**
 * Ejercicio 2
 * Funcion que dado una fecha de cumpleaños nos dice cuando caera domingo nuestro cumpleaños hasta 2100
 */

function cumpleDomingos(fecha) {
    
    let formateo=[];
        formateo=fecha.split('-');

       let anioNacimiento= parseInt(formateo[0]);
       let mesNacimiento= parseInt(formateo[1])-1; // los meses empiezan en 0 por eso resto
       let diaNacimiento=parseInt(formateo[2]);

       for (let  anioAhora= anioNacimiento+1;  anioAhora<= 2100; anioAhora++) {
        
        let fechaActual= new Date(anioAhora,mesNacimiento,diaNacimiento);
        
        if (fechaActual.getDay()===0) {
            console.log(`Año ${anioAhora} cae en domingo`);
        }
       }
        
}

/**
 * Ejercicio 3
 * Funcion que muestra la hora detallada y de forma simple
 */

function mostrarHora() {
    
    let timeNow= new Date();
    
    let hour=timeNow.getHours();
    let minutes=timeNow.getMinutes();
    let seconds=timeNow.getSeconds();

    hour = hour < 10 ? "0" + hour : hour;
    minutes= minutes < 10 ? "0" + minutes : minutes;
    seconds= seconds < 10 ? "0"+ seconds : seconds;

    console.log(`Son las: ${hour}:${minutes}:${seconds}`);
    console.log(`Son las: ${hour}h y ${minutes}m`);
}

/**
 * Ejercicio 4
 * Funcion que pida nombre y apellidos y calcule cuanto tiempo has tadado en introducirlo
 */

function contadorNombre() {

    
    let inicio=new Date().getTime();

    let nombre=prompt("Ingrese su nombre y apellidos:")
    let fin=new Date().getTime();
    let time=(fin-inicio)/1000; // devuelve en milisegundos de ahi el 1000
    
    alert(`Has tardado: ${time} segundos`);


}

/**
 * Ejercicio 5
 * Un menu y segun lo que pulsen una funcion distinta
 */

function Menu() {
    let opc=parseInt(prompt("Introduzca una de las opciones (1-4) \n 1.Potencia \n 2.Raiz \n 3.Redondeo \n 4.Trigonometria \n Opcion:"));
    
    if (opc==1) {
        let base,exponente;
        base=parseInt(prompt("Introduce la base:"));
        exponente=parseInt(prompt("introduce el exponente"));

        let result=Math.pow(base,exponente);

        alert(`La potencia de ${base} elevado a ${exponente} es: ${result}`);
    } else if (opc==2) {
        let num=parseInt(prompt("Introduce un numero no negativo"));
        let resultado=Math.sqrt(num);

        alert(`La raiz de ${num} es: ${resultado}`);

    }else if (opc==3) {
          let dec=parseFloat(prompt("Introduce un numero decimal"));
          let redondeo,baja,alta;
          redondeo=Math.round(dec);
          alta=Math.ceil(dec);
          baja=Math.floor(dec);

          alert(`El numero ${dec} redondeado es: ${redondeo} \n A la baja: ${baja} \n A lo alto: ${alta}`);

    } else if (opc==4) {
        let angulo=parseInt(prompt("Introduce el valor del angulo(entre 0 y 360)"));
        let radianes=angulo*0.0174533;
        let sen,cos,tan;
        sen=Math.sin(radianes);
        cos=Math.cos(radianes);
        tan=Math.tan(radianes);

        alert(`El seno del angulo es: ${sen} \n El coseno: ${cos} \n La tangente: ${tan}`);
    } else {
        alert("Introduce una opcion valida la proxima vez");
    }
        
    
    
}



/**
 * Ejercicio 6
 */

function cadenaNombre() {
    let nombre=prompt("Introduce tu nombre y apellidos")

    let tamanio = nombre.replaceAll(' ', '').length;

    console.log(`El tamaño de tu nombre y apellido es de ${tamanio}`);

    let nombreMin=nombre.toLowerCase();
    let nombreMax=nombre.toUpperCase();
    console.log(`Tu nombre en minuscula es: ${nombreMin} \n Tu nombre en mayuscula es: ${nombreMax}`);
    
    let arrayNombre=nombre.split(' ');

    console.log(`Nombre: ${arrayNombre[0]} \n Apellido 1: ${arrayNombre[1]} \n Apellido 2: ${arrayNombre[2]}`);

}

/**
 * Ejercicio 7
 * funcion que escribe 3 numeros y te dice cual es mayor
 */

function mayor() {
    let numeros=prompt("Escribe los 3 numeros separados por espacios");

    let arrayNumeros=numeros.split(' ');

    if (arrayNumeros[0]>=arrayNumeros[1] && arrayNumeros[0]>=arrayNumeros[2]) {
        alert(`El numero ${arrayNumeros[0]} es el mas grande`);
    } else if (arrayNumeros[1]>=arrayNumeros[0] && arrayNumeros[1]>=arrayNumeros[2]) {
        alert(`El numero ${arrayNumeros[1]} es el mas grande`);
    } if (arrayNumeros[2]>=arrayNumeros[1] && arrayNumeros[2]>=arrayNumeros[0]) {
        alert(`El numero ${arrayNumeros[2]} es el mas grande`);
    }
        
    
}

/**
 * Ejercicio 8
 * Funcion que dada una frase dice cuantas veces aparece la letra "a"
 * He modificado la funcion para que sea mas general y pueda usarse en el ejercicio 10
 */

function letter(letra,frase) {
    
    let cont=0;
    for (let i = 0; i < frase.length; i++) {
        if (frase.charAt(i)==letra) {
            cont++;
        }
        
    }
    alert(`La letra ${letra} aparece: ${cont} veces`)
}

/**
 * Ejercicio 9
 * Funcion que cuenta cuantas de las letras que tiene una frase son vocales
 */

function contVocales(frase) {
    let cont=0;
    for (let i = 0; i < frase.length; i++) {
        if (frase.charAt(i).toLowerCase()=='a' || frase.charAt(i).toLowerCase()=='e' || 
        frase.charAt(i).toLowerCase()=='i' || frase.charAt(i).toLowerCase()=='o' || frase.charAt(i).toLowerCase()=='u') {
            cont++;
        }
        
    }

    alert(`La frase "${frase}" tiene ${cont} vocales `);
}

/**
 * Ejercicio 11
 * Funcion que invierte una frase
 */

function invertir(frase) {
    
    let arrayFrase=frase.split('');
    let inversa=arrayFrase.reverse();
    let resultado=inversa.join('');
    
    alert(`el inverso de ${frase} es: ${resultado}`)
}