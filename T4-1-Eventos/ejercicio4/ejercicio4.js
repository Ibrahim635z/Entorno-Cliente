
const colorBorrar="lightgrey"




const dibujar= () => {

    const collection= document.getElementById("table").getElementsByTagName("td");
    

        for (let i = 0; i < collection.length; i++) {
            collection[i].addEventListener("mousemove",(event) => {

                if (event.ctrlKey) {
                    collection[i].style.backgroundColor="red";
                }else if (event.shiftKey) {
                    collection[i].style.backgroundColor="blue";
                }else if (event.altKey) {
                    collection[i].style.backgroundColor=colorBorrar; // EJERCICIO 5
                }
            
            });
            
            
        }

}

const borrarCanvas= () => {
    document.getElementById("btn1").addEventListener("click", () => {
        
        const collection=document.getElementById("table").getElementsByTagName("td");
        

        for (let i = 0; i < collection.length; i++) {
            
                collection[i].style.backgroundColor=colorBorrar

        }
        
    })
}




(function () {
    

    dibujar();
    borrarCanvas();

})();