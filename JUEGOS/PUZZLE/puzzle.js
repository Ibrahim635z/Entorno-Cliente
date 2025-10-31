

class Puzzle {
    
    constructor(dimension) {
        this.dimension = dimension;           
        this.tablero = [];                    
        this.vacioX = dimension - 1;          
        this.vacioY = dimension - 1;          
        this.movimientos = 0;                 
        this.tiempoInicio = Date.now();    
        
        this.generarTablero();
        this.Barajar();
    }

    
    generarTablero() {
        this.tablero = [];  
        let numero = 1;     
        
    
        for (let i = 0; i < this.dimension; i++) {
            this.tablero[i] = [];  // Creamos cada fila como un nuevo array
            
          
            for (let j = 0; j < this.dimension; j++) {
                this.tablero[i][j] = numero; 
                numero++;  
            }
        }
        
        // La última posición la dejamos vacía
        this.tablero[this.dimension - 1][this.dimension - 1] = 0;
    }

    
    mover(direccion) {
        let nuevaX = this.vacioX;
        let nuevaY = this.vacioY;
        
      
        switch(direccion) {
            case 'arriba':   
                nuevaY = this.vacioY - 1;
                break;
            case 'abajo':   
                nuevaY = this.vacioY + 1;
                break;
            case 'izquierda':  
                nuevaX = this.vacioX - 1;
                break;
            case 'derecha':    
                nuevaX = this.vacioX + 1;
                break;
            default:
                return false;  // Dirección no válida
        }
        
        // Verificamos que la nueva posición esté dentro de los límites del tablero
        if (nuevaX >= 0 && nuevaX < this.dimension && nuevaY >= 0 && nuevaY < this.dimension) {
            // Intercambiamos la posición vacía con la pieza adyacente
            this.tablero[this.vacioY][this.vacioX] = this.tablero[nuevaY][nuevaX];
            this.tablero[nuevaY][nuevaX] = 0;
            
            // Actualizamos la posición del espacio vacío
            this.vacioX = nuevaX;
            this.vacioY = nuevaY;
            
            this.movimientos++;  
            return true;  
        }
        
        return false;  // Movimiento inválido (fuera de los límites)
    }

    Barajar() {
        const movimientosAleatorios = ['arriba', 'abajo', 'izquierda', 'derecha'];
        const cantidadMovimientos = this.dimension * this.dimension * 10;  // Hacemos muchos movimientos
        
        // Realizamos movimientos aleatorios
        for (let i = 0; i < cantidadMovimientos; i++) {
            const direccionAleatoria = movimientosAleatorios[Math.floor(Math.random() * movimientosAleatorios.length)];
            this.mover(direccionAleatoria);
        }
        
        // Reseteamos el contador de movimientos al terminar de barajar
        this.movimientos = 0;
        this.tiempoInicio = Date.now();  // Reiniciamos el cronómetro
    }

    
    dibujar() {
        console.log('\n--- TABLERO DEL PUZZLE ---');
        
        // Recorremos cada fila
        for (let i = 0; i < this.dimension; i++) {
            let fila = '';
            
            for (let j = 0; j < this.dimension; j++) {
                // Si es el espacio vacío, mostramos [ ] en lugar de 0
                if (this.tablero[i][j] === 0) {
                    fila += '[ ]';
                } else {
                    
                    fila += "["+ this.tablero[i][j] + "]";
                   
                }
            }
            console.log(fila);  // Mostramos la fila completa
        }
        
        console.log('--- FIN TABLERO ---\n');
    }
    
    // Método que devuelve el tiempo transcurrido en segundos y lo redondeo con floor
    obtenerTiempo() {
        return Math.floor((Date.now() - this.tiempoInicio) / 1000);
    }
    
    
    obtenerMovimientos() {
        return this.movimientos;
    }
}

