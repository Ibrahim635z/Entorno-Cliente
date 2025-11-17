



const comprobacion=() => {

        document.getElementById("username").addEventListener("input",() => {
            const regExLowercase=/^.*[a-z].*$/
            const regExUppercase=/^.*[A-Z].*$/
            const regExMinimo=/^.{6,}$/
            const username=document.getElementById("username").value;
            if (regExLowercase.test(username)) {
                document.getElementById("lowercase").style.display="none";
            }else{
                document.getElementById("lowercase").style.display="block";
            }
            if (regExUppercase.test(username)) {
                document.getElementById("uppercase").style.display="none";
            }else{
                document.getElementById("uppercase").style.display="block";
            }
            if (regExMinimo.test(username)) {
                document.getElementById("minimo").style.display="none";
            }else{
                document.getElementById("minimo").style.display="block";
            }
        })
}



const main= () => {

        comprobacion();
}

document.addEventListener("DOMContentLoaded",main);