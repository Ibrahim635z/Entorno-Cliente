import { Factura } from "./Factura.js";
import { Linea } from "./Linea.js";



function incrementaFactura (arrFacturas,num,incremento){
   
    console.log(arrFacturas[num])
   return arrFacturas
}

function analizarFacturas(arrFacturas,num) {
    return arrFacturas;
}




function demuestraUso() {
    let arrFacturas=[];
    let arrLineas=[];
     let linea3=new Linea(3,"Pelota",3,7);
    let linea4=new Linea(4,"Sombrilla",1,7);
    let linea5=new Linea(5,"Cuaderno",5,3);



    arrLineas.push(linea3,linea4,linea5);
   
    let factura1=new Factura(1,"2022/05/12","Ramon",20,1.21,arrLineas);
    let factura2=new Factura(2,"2022/05/12","Luis",30,1.21,arrLineas);
    let factura3=new Factura(1,"2022/05/12","Ramon",20,1.21,arrLineas);

    arrFacturas.push(factura1);
    arrFacturas.push(factura2);
    arrFacturas.push(factura3);

    console.log(arrFacturas);

    console.log(factura1.sumaLineas());


    console.log(arrLineas);
   
   console.log(incrementaFactura(arrFacturas,1,1));
   console.log(analizarFacturas(arrFacturas,1));
}

(function () {
    

    demuestraUso()

    
    
    

    
})();