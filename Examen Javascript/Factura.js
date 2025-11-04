import { Linea } from "./Linea.js";


export class Factura{
    

    constructor(numero,fecha,nombre_cliente,subtotal,iva,arrLineas){
        this.numero=numero;
        this.fecha=new Date(fecha);
        this.nombre_cliente=nombre_cliente;
        this.subtotal=subtotal;
        this.iva=iva;
        this.arrlineas=arrLineas;
        
    }

    getFecha(){
        return this.fecha;
    }
    getNumero(){
        return this.numero;
    }

    setFecha(fecha){
        this.fecha=fecha;
    }   
    setNumero(numero){
        this.numero=numero;
    }

    sumaLineas(){
       let result=0;
        for (let i = 0; i < this.arrlineas.length; i++) {
        const element = this.arrlineas[i];
       
        result+=element.unidades*element.pvp;;

        
       }
       return result;
    }
    getTotal(){
        return this.sumaLineas()+this.iva;
    }
    show(){
        console.log(`numero: ${this.numero}, Fecha: ${this.fecha}, NombreCliente: ${this.nombre_cliente}, Subtotal: ${this.subtotal} , IVA: ${this.iva}, Lineas: ${this.lineas}`);
    }


}