

const movMouse= () =>{

    document.addEventListener("mousemove", (event) => {
        document.getElementById("coordenadas").textContent=`(${event.pageX},${event.pageY})`;
        
    })
}






(function () {
    
    movMouse();


})();