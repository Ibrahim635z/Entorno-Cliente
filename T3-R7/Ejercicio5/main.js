import { Alumno } from "./Alumno.js";
import { Colegio } from "./Colegio.js";





(function () {
    const colegio = new Colegio("Rosalia de Castro", 12, 5);
    colegio.consultarNotaMedia(0);
    colegio.modificarNotaMedia(1, 7.5);
    colegio.consultarNotaMedia(1);
    colegio.mostrarTodosLosAlumnos();
})();