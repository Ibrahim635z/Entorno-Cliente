class Buscaminas {
    constructor() {
        this.dimension = 8;
        this.tablero = [];
        this.tiempoInicio = Date.now();
    }

    inicializarTablero() {
        
        for (let i = 0; i < this.dimension; i++) {
            const fila = [];
            for (let j = 0; j < this.dimension; j++) {
                fila.push(0);
            }
            this.tablero.push(fila);
        }
    }

    dibujar() {
        this.tablero.forEach((fila) => {
            console.log(fila.join(" "));
        });
    }

    rellenarTablero(){
        
        
        for (let i = 0; i < 10; i++) {
            let posFila=Math.floor(Math.random()*this.dimension);
            let posColum=Math.floor(Math.random()*this.dimension);
            if (this.tablero[posFila][posColum]===0) {
                
                this.tablero[posFila][posColum]="X";
                // deberia verificar de alguna forma que no me estoy pasando de los limites del tablero
                this.tablero[posFila-1][posColum-1]+=1;
                this.tablero[posFila-1][posColum]+=1;
                this.tablero[posFila-1][posColum+1]+=1;
                this.tablero[posFila][posColum-1]+=1;
                this.tablero[posFila][posColum+1]+=1;
                this.tablero[posFila+1][posColum-1]+=1;
                this.tablero[posFila+1][posColum]+=1;
                this.tablero[posFila+1][posColum+1]+=1;
            }else{
                i--;
            }
            
        }    
        
    }

    obtenerTiempo() {
        return Math.floor((Date.now() - this.tiempoInicio) / 1000);
    }
}

const partida1 = new Buscaminas();
partida1.inicializarTablero();
partida1.dibujar();
partida1.rellenarTablero();
if (obtenerTiempo()>600) {
    console.log("Se te ha acabado el tiempo");
}

