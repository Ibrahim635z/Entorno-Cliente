



const cambioImagen= () => {

    const img= document.getElementById("imagen");

    img.addEventListener("mouseover", () => {

        img.src="./img/imagen.png";
    })

    img.addEventListener("mouseout", () => {
        img.src="./img/fondo.png"
    })

}



const cambioColor= () => {

    const mapaColores = {
        "#0000FF": "azul",
        "#FF0000": "rojo",
        "#00FF00": "verde",
        "#FFFFFF": "blanco",
        "#000000": "negro",
        "#FFFF00": "amarillo", 
        "#00FFFF": "cian",
        "#FF00FF": "magenta",
        "#FFA500": "naranja",
        "#808080": "gris",
        "#800080": "morado",
        "#A52A2A": "marrón"
    };

    const collection= document.getElementsByTagName("td");

    for (let i = 0; i < collection.length; i++) {
        
        let contenido= collection[i].textContent;

        let color=mapaColores[contenido];

        collection[i].addEventListener("mouseover",() =>{
            collection[i].style.color=contenido;
        })

        collection[i].addEventListener("mouseout",() =>{
            collection[i].textContent=color;
        })

        
    }
}



(function () {
    
    cambioImagen();
    cambioColor();

})();