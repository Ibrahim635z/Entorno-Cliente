

const inicializaEventos=()=>{
    console.log("Eventos");
    document.getElementById("btn1").addEventListener("click",() =>{

    alert("Has pulsado el boton");

});

}



(function () {
    
    
    inicializaEventos();


})();

