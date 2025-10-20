 import { Cliente  } from "./Cliente.js";
 import { Articulo } from "./Articulo.js";


 export class Albaran {
            constructor(cliente,nAlbaran,fecha,lineas) {
                this.cliente=cliente;
                this.nAlbaran=nAlbaran;
                this.fecha=fecha;
                this.lineas=lineas;       
            }

            show(){
                console.log(this.cliente,this.nAlbaran,this.fecha,this.lineas)
            }
            addArticulo(articulo){
                this.lineas.push(articulo);
            }

        }