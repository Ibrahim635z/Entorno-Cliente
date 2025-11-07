




const tiempoCarga= (tiempo1) => {

    window.addEventListener("load", (event) => {

       let tiempo2=new Date();

       let tiempoDeCarga= tiempo2.getTime() - tiempo1.getTime()  ;
       console.log(tiempoDeCarga);

    })


}





(function () {
    let tiempo1= new Date();

    
    tiempoCarga(tiempo1);

})();