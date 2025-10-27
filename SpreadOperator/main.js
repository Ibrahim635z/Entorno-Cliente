
let ejemmplosSpreadOperatorCombinarObjetos=()=>{
    const objeto1={nombre:"pedro",edad:"28"};
    const objeto2={direccion:"C/Goya",numero:2};

    const objetosCombinados={...objeto1,...objeto2,pais:"españa"};
    console.log("objeto 1: ",objeto1);
    console.log("objeto 2: ",objeto2);
    console.log("objeto Combinado: ",objetosCombinados);


}

/**
 * Copiar objetos 
 */
let ejemploSpreadOperatorObjetos=()=>{
    const obj1={nombre:"ibra" , edad:25};
    const obj2={...obj1};
    obj2.nombre="Luis"
    console.log("persona 1: ",obj1);
    console.log("persona 2: ",obj2);

}
/**
 * copiar arrays
 */
let expandeArray= () =>{
    const numeros=[1,2,3,4,5];
    console.log("Array original:",numeros);
    console.log("Array expandido:",...numeros);
}


/**
 * Ejemplo uso Spread operator
 */

(function () {

    console.log("main js ejecutado");
    expandeArray();

    let arrValores=["a","b","c","d"]
    console.log("Array valores original antes de copiar: ",arrValores);

    let arrCopiado=[...arrValores,"e","f",...arrValores]; // concateno arrays
    
    arrCopiado.push("z")
    console.log("Array valores original despues de copiar: ",arrValores);
    console.log("Array copiado despues de modificar ",arrCopiado);


    // copiar objetos

    ejemploSpreadOperatorObjetos();

    //combinar objetos
    ejemmplosSpreadOperatorCombinarObjetos();

})();