
let divFondoDefault,divBorderDefault,navFondoDefaul,div1FondoDefault,divColorDefault;
const guardarConfig= () => {
    divFondoDefault=document.getElementsByTagName("div")[0].style.backgroundColor;
    navFondoDefaul=document.getElementsByTagName("nav")[0].style.backgroundColor;
    divBorderDefault=document.getElementsByTagName("div")[1].style.border;
    div1FondoDefault=document.getElementsByTagName("div")[1].style.backgroundColor;
    divColorDefault=document.getElementsByTagName("div")[1].style.color;
}



const cambioPagina= () => {

    
    

    document.getElementById("txtnormal").addEventListener("click", () => {


    


        document.getElementsByTagName("div")[0].style.backgroundColor="yellow";
        document.getElementsByTagName("nav")[0].style.backgroundColor="aqua";
        document.getElementsByTagName("div")[1].style.border="1px solid black";
        document.getElementsByTagName("div")[1].style.backgroundColor="lightgray";
        document.getElementsByTagName("div")[1].style.color="blue";



    })

    document.getElementById("txtmini").addEventListener("click", () => {


        document.getElementsByTagName("div")[0].style.backgroundColor=divFondoDefault;
        document.getElementsByTagName("nav")[0].style.backgroundColor=navFondoDefaul;
        document.getElementsByTagName("div")[1].style.border=divBorderDefault;
        document.getElementsByTagName("div")[1].style.backgroundColor=div1FondoDefault;
        document.getElementsByTagName("div")[1].style.color=divColorDefault;


    })
    


}






const main= () => {
    guardarConfig();
    cambioPagina();


}



document.addEventListener("DOMContentLoaded",main);