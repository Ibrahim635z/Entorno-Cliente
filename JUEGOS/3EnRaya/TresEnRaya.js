

class TresEnRaya {
	constructor() {
		this.dimension = 3;
		this.piezaX = "X";
		this.piezaO = "O";
		this.piezaVacia = " ";
        this.turno=1;
		
		this.inicializartablero();
	}

	inicializartablero() {
		this.tablero = [];
		for (let i = 0; i < this.dimension; i++) {
			let fila = [];
			for (let j = 0; j < this.dimension; j++) {
				fila.push(this.piezaVacia);
			}
			this.tablero.push(fila);
		}
	}

	dibujar() {
		let filas = this.tablero.map(fila => fila.map(celda => `[${celda}]`).join(""));
		filas.forEach(element => {
			console.log(element);
		});
	}

    movimiento(casilla){
        let pieza;
        console.log("\n------------------\n")
        if (this.turno%2==0) {
            console.log("Turno del jugador 2\n")
            pieza=this.piezaX;
        }else{
            console.log("Turno del jugador 1\n");
            pieza=this.piezaO;
        }

			switch (casilla) {
            case 1:
                if (this.tablero[0][0]=="X" || this.tablero[0][0]=="O") {
                    console.log("Esta casilla ya esta ocupada");
                }else{
                    this.tablero[0][0]=pieza;
                    this.turno++;
                }
                
                break;
            case 2:
				  if (this.tablero[0][1]=="X" || this.tablero[0][1]=="O") {
                    console.log("Esta casilla ya esta ocupada");
                }else{
						this.tablero[0][1]=pieza;
                    this.turno++;
                }
                break;
            case 3:
				  if (this.tablero[0][2]=="X" || this.tablero[0][2]=="O") {
                    console.log("Esta casilla ya esta ocupada");
                }else{
						this.tablero[0][2]=pieza;
                    this.turno++;
                }
                break;
            case 4:
                if (this.tablero[0][1]=="X" || this.tablero[0][1]=="O") {
                    console.log("Esta casilla ya esta ocupada");
                }else{
                    this.tablero[0][1]=pieza;
                    this.turno++;
                }
                break;
            case 5:
                if (this.tablero[1][1]=="X" || this.tablero[1][1]=="O") {
                    console.log("Esta casilla ya esta ocupada");
                }else{
                    this.tablero[1][1]=pieza;
                    this.turno++;
                }
                break;
            case 6:
                if (this.tablero[1][2]=="X" || this.tablero[1][2]=="O") {
                    console.log("Esta casilla ya esta ocupada");
                }else{
                    this.tablero[1][2]=pieza;
                    this.turno++;
                }
                break;
            case 7:
                if (this.tablero[2][0]=="X" || this.tablero[2][0]=="O") {
                    console.log("Esta casilla ya esta ocupada");
                }else{
                    this.tablero[2][0]=pieza;
                    this.turno++;
                }
                break;
            case 8:
					if (this.tablero[2][1]=="X" || this.tablero[2][1]=="O") {
                    console.log("Esta casilla ya esta ocupada");
                }else{
						this.tablero[2][1]=pieza;
                    this.turno++;
                }
                break;
            case 9:
                if (this.tablero[2][2]=="X" || this.tablero[2][2]=="O") {
                    console.log("Esta casilla ya esta ocupada");
                }else{
                    this.tablero[2][2]=pieza;
                    this.turno++;
                }
                break;                        
            default:
                break;
        }
        
         
    }

    comprobacionVictoria(){
		
		const victorias = [
			// Filas
			[[0,0],[0,1],[0,2]],
			[[1,0],[1,1],[1,2]],
			[[2,0],[2,1],[2,2]],
			// Columnas
			[[0,0],[1,0],[2,0]],
			[[0,1],[1,1],[2,1]],
			[[0,2],[1,2],[2,2]],
			// Diagonales
			[[0,0],[1,1],[2,2]],
			[[0,2],[1,1],[2,0]]
		];

		for (const victoria of victorias) {
			const [a,b,c] = victoria;
			const pos1 = this.tablero[a[0]][a[1]];
			const pos2 = this.tablero[b[0]][b[1]];
			const pos3 = this.tablero[c[0]][c[1]];
			if (pos1 !== " " && pos1 === pos2 && pos2 === pos3) {
				if(this.turno%2==0){
					console.log("Has ganado jugador 1");
				}else{
					console.log("Has ganado jugador 2");
				}
				return true;
			}
		}
		return false;
	}

}



const partida1 = new TresEnRaya();
partida1.dibujar();
partida1.movimiento(2);
partida1.dibujar();
partida1.comprobacionVictoria();
partida1.movimiento(5);
partida1.dibujar();
partida1.comprobacionVictoria();
partida1.movimiento(1);
partida1.dibujar();
partida1.comprobacionVictoria();
partida1.movimiento(7);
partida1.dibujar();
partida1.comprobacionVictoria();
partida1.movimiento(3);
partida1.dibujar();
partida1.comprobacionVictoria();


