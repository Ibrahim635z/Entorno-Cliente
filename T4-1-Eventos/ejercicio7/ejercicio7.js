



/*const informacion= () => {

        document.getElementById("inombre").addEventListener("focus" , () => {
                    document.getElementById("dnombre").style.display="flex";
        });

        document.getElementById("inombre").addEventListener("blur" , () => {
            document.getElementById("dnombre").style.display="none";
        })

}*/


const informacion= () => {

        const collection = document.querySelectorAll("input, textarea, button");
        
        collection.forEach(element => {
            
            const id= "d" + element.id.substring(1);

            element.addEventListener("focus" , () => {
                document.getElementById(id).style.display="flex";
            });

            element.addEventListener("blur" , () => {
                document.getElementById(id).style.display="none";
            })
            
        });   

    }



(function () {
    

    informacion();

})();