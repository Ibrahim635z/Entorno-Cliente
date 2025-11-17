


const validarMayuscula= () => {
    console.log("------------------APARTADO 1------------------");
    const regExMayus= /^.*[A-Z]{1,}.*$/
    const array=["Hola","hOla","hola","holA"];
    array.forEach(element => {
        if (regExMayus.test(element)) {
        console.log(element, "Si hay mayus");
    } else {
        console.log(element, "no hay mayus")
    }
    });
    
}

const validarCaracteresEspeciales=() => {
     console.log("------------------APARTADO 2------------------");
    const regExCaractEspecial = /^.*[!@#$%^&].*$/
    const array=["!bra","hol@","$i","!br@","mundo","#"];
    array.forEach(element => {
        if (regExCaractEspecial.test(element)) {
            console.log(element , "Si tiene caracter especial");
        } else {
            console.log(element , "NO tiene caracter especial");
        }
    });
}

const validarCorreo= () => {
     console.log("------------------APARTADO 3------------------");
    const regExCorreo= /^[^@]*[^@.]@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/
    const array=["ibra@loquesea.com","m@nu@hotmail.com","ibra@loquesea.s","ibra@lo.quesea.com","ibra.mohamed@gmail.com"]
    array.forEach(element => {
        if (regExCorreo.test(element)) {
            console.log(element, "Es un correo Valido");
        } else {
            console.log(element, "NO Es un correo Valido");
        }
    });
}

const validarTarjetaCredito= () => {
       console.log("------------------APARTADO 4------------------");
    const regExCorreo= /^\d{13,19}$/
    const array=["524125","5","123456789123456","987456352145784128"];
    array.forEach(element => {
        if (regExCorreo.test(element)) {
            console.log(element, "Es una Tarjeta Valida");
        } else {
            console.log(element, "NO Es una tarjeta Valida");
        }
    });
}

const validarLongitud= () => {
     console.log("------------------APARTADO 5------------------");
    const regExCorreo= /^.{8,}$/
    const array=["yes","exploracion","cuando","hola mundo"];
    array.forEach(element => {
        if (regExCorreo.test(element)) {
            console.log(element, "Es una Longitud Valida");
        } else {
            console.log(element, "NO Es una longitud Valida");
        }
    });
}

const validarNumero= () => {
    console.log("------------------APARTADO 6------------------");
    const regExCorreo= /^.*\d.*$/
    const array=["3","hola","cuando","19",6,32];
    array.forEach(element => {
        if (regExCorreo.test(element)) {
            console.log(element, "Es un numero Valido");
        } else {
            console.log(element, "NO Es una numero Valido");
        }
    });
}

const main= () => {

    validarMayuscula();
    validarCaracteresEspeciales();
    validarCorreo();
    validarTarjetaCredito();
    validarLongitud();
    validarNumero();

}


document.addEventListener("DOMContentLoaded",main);