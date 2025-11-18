const comprobacion = () => {
    
    // NÚMERO DE TARJETA
    
    document.getElementById("numero-tarjeta").addEventListener("blur", () => {
        const numeroTarjeta = document.getElementById("numero-tarjeta").value;
        
        // Permite dígitos y espacios.
        const regExTarjeta = /^[0-9]{13,16}$/; 

        // Limpiamos espacios para contar solo los números
        const numeroLimpio = numeroTarjeta.replace(/\s/g, '');
        
        if (regExTarjeta.test(numeroTarjeta) && numeroLimpio.length >= 13 && numeroLimpio.length <= 19) {
            document.getElementById("numero-tarjeta").style.border = "1px solid green";
        } else {
            document.getElementById("numero-tarjeta").style.border = "1px solid red";
        }
    });

    // TITULAR DE LA TARJETA
    
    document.getElementById("titular-tarjeta").addEventListener("blur", () => {
        const titular = document.getElementById("titular-tarjeta").value;
        const regExTitular = /^[a-zA-Z\s]{2,}$/;

        if (regExTitular.test(titular)) {
            document.getElementById("titular-tarjeta").style.border = "1px solid green";
        } else {
            document.getElementById("titular-tarjeta").style.border = "1px solid red";
        }
    });

    // MES DE EXPIRACIÓN
    
    document.getElementById("mes-expiracion").addEventListener("blur", () => {
        const mes = document.getElementById("mes-expiracion").value;
        
        if (mes !== "") {
            document.getElementById("mes-expiracion").style.border = "1px solid green";
        } else {
            document.getElementById("mes-expiracion").style.border = "1px solid red";
        }
    });

    // AÑO DE EXPIRACIÓN
    
    document.getElementById("anio-expiracion").addEventListener("blur", () => {
        const anio = document.getElementById("anio-expiracion").value;
        
        if (anio !== "") {
            document.getElementById("anio-expiracion").style.border = "1px solid green";
        } else {
            document.getElementById("anio-expiracion").style.border = "1px solid red";
        }
    });

    
    //ccv
    document.getElementById("cvv").addEventListener("blur", () => {
        const valorCvv = document.getElementById("cvv").value;
        const regExCvv = /^\d{3,4}$/;

        if (regExCvv.test(valorCvv)) {
            document.getElementById("cvv").style.border = "1px solid green";
        } else {
            document.getElementById("cvv").style.border = "1px solid red";
        }
    });
}

const main = () => {
    comprobacion();
}

document.addEventListener("DOMContentLoaded", main);