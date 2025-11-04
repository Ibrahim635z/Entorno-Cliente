

export class Linea{

    constructor(codigo,descripcion,unidades,pvp){
        this.codigo=codigo;
        this.descripcion=descripcion;
        this.unidades=unidades;
        this.pvp=pvp;
    }

    getTotal(){
        return this.unidades*this.pvp;
    }

}