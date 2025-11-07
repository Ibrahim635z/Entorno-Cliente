const colorOriginal="gray";
const colorhover="red";
const textoOriginal="DIV 1";
const eventosDiv=() => {
    let div=document.getElementById("div1");
    
    document.getElementById("div1").addEventListener("mouseover", (event) =>{
        document.getElementById("div1").style.background= colorhover;
        document.getElementById("div1").textContent= `(${event.clientX},${event.pageY})`;
        console.log("Objeto evento:", event);
        console.log(`Evento: ${event.type} en div ${event.target.id}`);
        if (event.ctrlKey) {
            console.log("Tenias pulsado el Control");
        }else{
            console.log("No tenias pulsado el Control")
        }
        
    });


    document.getElementById("div1").addEventListener("mouseout", (event)=>{
        document.getElementById("div1").textContent= textoOriginal;
        document.getElementById("div1").style.background= colorOriginal;
    });

    
}



(function () {
    
    eventosDiv();

})();