import { Articulo } from "./Articulo.js";

export class Articulos {
    constructor(arArticulos) {
        // array que contiene objetos articulos
        this.listaArticulos=arArticulos;
    }

   existeArticulo(codigo){
    
    if(this.listaArticulos.find(art => art.codigo== codigo)==undefined){
        return false;
    }
    
    return true;
   }

   filtrarPorPrecio(precioMinimo){
    return this.listaArticulos.filter( ({precio}) => precio >precioMinimo);
   }

   filtra(callback){
        return this.listaArticulos.filter(callback);
   }

   addArticulo(articulo){
        this.listaArticulos.push(articulo);
   }

   removeArticulo(codigo){

    let posicion=this.listaArticulos.findIndex( art => art.codigo==codigo);
    this.listaArticulos.splice(posicion,1);
   }

   
}