



const dibujar= () => {

    const collection= document.getElementsByTagName("div");
    

        for (let i = 0; i < collection.length; i++) {
            collection[i].addEventListener("mousemove",(event) => {
            collection[i].style.backgroundColor="red";

            })
            
            
        }

}



(function () {
    

    dibujar();

})();