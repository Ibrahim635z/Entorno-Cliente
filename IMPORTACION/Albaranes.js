import {  } from "./Articulos.js";
import { Albaran } from "./Albaran.js";
import { Cliente } from "./Cliente.js";


export class Albaranes {
    constructor(arAlbaranes) {
        this.listaArticulos=arAlbaranes;
    }

    inicializaDatos() {
        const arAlbaranes=[];
        console.log("Inicializando Albaranes...")
        for (let i = 0; i < 3; i++) {
            
            arAlbaranes.push(new Albaran (i+1,`Albaran ${i+1}`,`${i+10} septiembre`,this.inicializaDatos))
        }
    }
}