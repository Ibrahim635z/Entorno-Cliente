




const comprobacion= () =>{
    //nombre

    document.getElementById("name").addEventListener("blur", () => {
        const name=document.getElementById("name").value;
        const regExNAme=/^[a-zA-Z]{1,}$/ 
        if (regExNAme.test(name)) {
            document.getElementById("name").style.border="1px solid green";
        }else{
            document.getElementById("name").style.border="1px solid red";
        }

    });

    //apellido

    document.getElementById("last-name").addEventListener("blur", () => {
        const lastName=document.getElementById("last-name").value;
        const regExNAme=/^[a-zA-Z]+( [a-zA-Z]+)?$/ 
        if (regExNAme.test(lastName)) {
            document.getElementById("last-name").style.border="1px solid green";
        }else{
            document.getElementById("last-name").style.border="1px solid red";
        }

    });

    //telefono

    document.getElementById("phone").addEventListener("blur", () => {
        const phone = document.getElementById("phone").value;
        const regExPhone = /^[6-9]\d{8}$/; 
        if (regExPhone.test(phone)) {
            document.getElementById("phone").style.border = "1px solid green";
        } else {
            document.getElementById("phone").style.border = "1px solid red";
        }
    });

    //email
    
    document.getElementById("email").addEventListener("blur", () => {
        const email = document.getElementById("email").value;
        const regExEmail = /^[^@]*[^@.]@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/; 
        if (regExEmail.test(email)) {
            document.getElementById("email").style.border = "1px solid green";
        } else {
            document.getElementById("email").style.border = "1px solid red";
        }
    });

    //password

    document.getElementById("password").addEventListener("blur", () => {
        const password = document.getElementById("password").value;
         //(?=.*\d) -> debe tener un dígito
        // (?=.*[.,!¡?¿@#%&]) -> debe tener un signo
        // .{8,} -> 8 o más caracteres
            const regExPassword = /^(?=.*\d)(?=.*[.,!¡?¿@#%&]).{8,}$/;
        if (regExPassword.test(password)) {
            document.getElementById("password").style.border = "1px solid green";
        } else {
            document.getElementById("password").style.border = "1px solid red";
        }
    });


    document.getElementById("confirm-password").addEventListener("blur", () => {
        const password = document.getElementById("password").value; 
        const confirmPassword = document.getElementById("confirm-password").value;

        if (confirmPassword === password && password !== "") {
            document.getElementById("confirm-password").style.border = "1px solid green";
        } else {
            document.getElementById("confirm-password").style.border = "1px solid red";
        }
    });

    
}






const main= () => {

    
    comprobacion();

}


document.addEventListener("DOMContentLoaded",main);