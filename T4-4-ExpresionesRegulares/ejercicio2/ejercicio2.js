
/**
 * Valida Nombre y Apellidos.
 * Permite letras (con acentos/ñ), espacios y apóstrofes.
 * El '+' asegura que el campo no esté vacío.
 */
const validarTexto = (valor) => {
    const regEx = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s']+$/;
    return regEx.test(valor);
}

/**
 * Valida DNI español (8 números, 1 letra).
 */
const validarDNI = (valor) => {
    const regEx = /^\d{8}[a-zA-Z]$/;
    return regEx.test(valor);
}

/**
 * Valida Teléfono español. que empieze por 6 7 8 o 9
 */
const validarTelefono = (valor) => {
    const regEx = /^[6-9]\d{8}$/;
    return regEx.test(valor);
}

/**
 * Valida Email
 */
const validarEmail = (valor) => {
    const regEx = /^[^@]*[^@.]@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
    return regEx.test(valor);
}

/**
 * Valida Nombre de Usuario.
 * Mínimo 8 caracteres, al menos 1 número, al menos 1 signo de puntuación.
 */
const validarUsuario = (valor) => {
    //(?=.*\d) -> debe tener un dígito
    // (?=.*[.,!¡?¿@#%&]) -> debe tener un signo
    // .{8,} -> 8 o más caracteres
    const regEx = /^(?=.*\d)(?=.*[.,!¡?¿@#%&]).{8,}$/;
    return regEx.test(valor);
}

const aplicarEfecto = (elemento, esValido) => {
        if (esValido) {
            
            elemento.style.border = "2px solid #3ce941ff"; 
        } else {
           
            elemento.style.border = "2px solid red"; 
        }
    }

const main = () => {

    // Obtener todos los inputs del formulario
    const inputNombre = document.getElementById("nombre");
    const inputApellido = document.getElementById("apellido");
    const inputDNI = document.getElementById("dni");
    const inputTelefono = document.getElementById("telefono");
    const inputEmail = document.getElementById("email");
    const inputUsuario = document.getElementById("usuario");

    

    //  'blur' (al salir el foco)
    
    inputNombre.addEventListener("blur", () => {
        const esValido = validarTexto(inputNombre.value);
        aplicarEfecto(inputNombre, esValido);
    });
    // usamos la misma que para el texto
    inputApellido.addEventListener("blur", () => {
        const esValido = validarTexto(inputApellido.value);
        aplicarEfecto(inputApellido, esValido);
    });

    inputDNI.addEventListener("blur", () => {
        const esValido = validarDNI(inputDNI.value);
        aplicarEfecto(inputDNI, esValido);
    });

    inputTelefono.addEventListener("blur", () => {
        const esValido = validarTelefono(inputTelefono.value);
        aplicarEfecto(inputTelefono, esValido);
    });

    inputEmail.addEventListener("blur", () => {
        const esValido = validarEmail(inputEmail.value);
        aplicarEfecto(inputEmail, esValido);
    });

    inputUsuario.addEventListener("blur", () => {
        const esValido = validarUsuario(inputUsuario.value);
        aplicarEfecto(inputUsuario, esValido);
    });
}

document.addEventListener("DOMContentLoaded", main);