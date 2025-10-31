import { Puzzle } from "./puzzle.js";

(function () {
    


let miPuzzle = new Puzzle(3);


console.log("Tablero inicial");
miPuzzle.dibujar();

// Hacemos algunos movimientos de prueba
console.log("Movimiento: arriba");
miPuzzle.mover("arriba");
miPuzzle.dibujar();

console.log("Movimiento: izquierda");
miPuzzle.mover("izquierda");
miPuzzle.dibujar();

// Mostramos variables
console.log("Movimientos realizados:", miPuzzle.obtenerMovimientos());
console.log("Tiempo transcurrido:", miPuzzle.obtenerTiempo(), "segundos");


})();