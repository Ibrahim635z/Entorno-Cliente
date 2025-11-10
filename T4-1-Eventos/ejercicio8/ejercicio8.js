


const transformador= () => {


        const collection=document.querySelectorAll("input, textarea");

        collection.forEach(element => {
        

            element.addEventListener("blur", () => {
                
                let valorTransformado=element.value.replace(/&/g,"and"); 
                //no modifica directamente me devuelve por tanto lo guardo en una variable
                element.value=valorTransformado;

            })

        });
}




(function () {
    
    transformador();

})();