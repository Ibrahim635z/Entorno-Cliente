


const contador= () => {
    const div=document.createElement("div");
    const body=document.getElementsByTagName("body")[0];

    body.appendChild(div);

    div.textContent="1";

    const boton=document.createElement("button");

    div.appendChild(boton);

   
    boton.textContent="Pulsa para sumar";

    boton.addEventListener("click",() => {
        
        let valorActual = parseInt(div.textContent)+1;
       
        div.textContent = valorActual.toString(); 

        
        // Cuando hago div.textContent = ... se borra todo el contenido anterior, incluyendo el botón.
        div.appendChild(boton);
    })
}




const main= () => {

    contador();

}



document.addEventListener("DOMContentLoaded",main);