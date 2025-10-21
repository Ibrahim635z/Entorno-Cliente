import {Articulo} from "./Articulo.js";
import {Cliente} from "./Cliente.js";
import {Albaran} from "./Albaran.js";
import { Albaranes } from "./Albaranes.js";


(function () {
    // creacion de clientes

    let cli1=new Cliente(1,"pablo","C/goya","648532154","prueba@test.es");
    let cli2=new Cliente(2,"juan","C/goya","648532154","prueba@test.es");
    
    // creacion de articulos

    let arti1=new Articulo("AB123","Toalla",15);
    let arti2=new Articulo("BD123","Sombrilla",20);

    // creacion albaranes
    let alb1=new Albaran(cli1,1,"10/12/2025",[arti1]);
    let alb2=new Albaran(cli1,2,"10/08/2025",[arti2]);
    let alb3=new Albaran(cli1,1,"10/09/2025",[arti1]);
    let alb4=new Albaran(cli1,2,"10/11/2025",[arti1,arti2]);
    
    // funcion buscar albaran segun el cliente pasado como parametro

    function buscarAlbaran(arrAlbaranes, cliente) {
    arrAlbaranes.forEach(albaran => {
        if (albaran.cliente == cliente) {
            console.log(albaran);
        }
    });
}
// funcion buscar el albaran de un cliente cuyo codigo es si ID
   function buscaEnAlbaranClientePorCodigo(arrAlbaranes,cod) {
    let arrNum=[0,1,2,4,3,5]
    function predicate(num) {
        return num==25
    }
    
    let valor=arrNum.find(num => num==5)
    console.log(valor)


    let valor2=arrAlbaranes.find(albaran=> albaran.nAlbaran==2)
    console.log(valor2)


    let valor3=arrAlbaranes.find(albaran=>albaran.cliente.id==1)
    console.log(valor3)
}

    console.log(cli1);
    console.log(arti1);

    
     
    alb1.show();
    alb1.addArticulo(arti2);
    alb1.show();
         const albaranes = [alb1, alb2, alb3];
       buscaEnAlbaranClientePorCodigo(albaranes);
})();