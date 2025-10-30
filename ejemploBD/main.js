import db  from './db/db.json' with {type: 'json'};


/**
 * 
 * @param {*} db 
 * @param {*} idAlumno 
 * @returns devuelve uun array con los cursos en los que esta matriculado el id que le hemos pasado
 */


function devuelveCursosAlumno (db,idAlumno) {
   
   let arId=[];
   const arEnrollments=db.enrollments;
   const arMatricula=arEnrollments.filter(({studentId}) => studentId == idAlumno);
    
   function transforma(objEnrollments) {
        let arrobjeto=
            {
                cursoid: objEnrollments.courseId,
                enrollmentDate: objEnrollments.enrollmentDate,
                completed: objEnrollments.completed

            }
        
        return arrobjeto;
   }
   
   
   
   arId=arMatricula.map(transforma);
   return arId;
    }

    function ordenarPorFecha(db) {
        let dbOrdenada=[...db];
        let arEnrollments=db.Enrollments;
        let date=arEnrollments.enrollmentDate;

        

    }







/**
 * 
 * @param {*} db base de datos con los 3 atributos
 * @returns Array con la combinacion de estudiantes y cursos
 */

function combinaEstudantesYcursos(db){
    let combinaArrayEstudiantesyCursos=[];
    combinaArrayEstudiantesyCursos=combinaArrayEstudiantesyCursos.concat(db.students);
    combinaArrayEstudiantesyCursos=combinaArrayEstudiantesyCursos.concat(db.courses);

    console.log (combinaArrayEstudiantesyCursos);
    return combinaArrayEstudiantesyCursos;
}

function CombinaEstudiantesYcursosSpreadOperator(db) {
    return [...db.students,...db.courses];
}


/**
 * main12.js    
 */
(function (){
    console.log("Hola desde main12.js");
    console.log("Cargando datos desde JSON...");
    console.log(db);
    console.log("Estudiantes",db.students);
    console.log("Cursos",db.courses);
    console.log("Enrollments",db.enrollments);

    combinaEstudantesYcursos(db);
    console.log(CombinaEstudiantesYcursosSpreadOperator(db));
    console.log(devuelveCursosAlumno(db,6));
    
})();

