import { Alumno } from "./Alumno.js";



export class Colegio{
            constructor(nombre,numAulas,numAlumnos){
                this.nombre=nombre;
                this.numAulas=numAulas;
                this.numAlumnos=numAlumnos;
                this.arrayAlumnos=[];

                for (let i = 0; i < numAlumnos; i++) {
                    let notaMedia=5;
                    let nombre=`Alumno${i+1}`;
                    let id=i;

                   let nuevoAlumno=new Alumno(id,nombre,notaMedia);
                    this.arrayAlumnos.push(nuevoAlumno);
                }
            }

            buscarAlumno(idbuscado){
                return this.arrayAlumnos.find(alumno => alumno.id == idbuscado);
            } 
            
            consultarNotaMedia(idAlumno){
                const alumno = this.buscarAlumno(idAlumno);
                if(!alumno){
                    console.log("Alumno no encontrado");
                    return;
                }
               
                console.log(`Nota media de ${alumno.nombre} es: ${alumno.nota} `);
            }

            modificarNotaMedia(idAlumno, nuevaNota){
                const alumno = this.buscarAlumno(idAlumno);
                if(!alumno){
                    console.log("Alumno no encontrado");
                    return;
                }
                alumno.nota = nuevaNota;
            }

            mostrarTodosLosAlumnos(){
                console.log(`Alumnos del colegio ${this.nombre}\n`);

                this.arrayAlumnos.forEach(element => {
                    console.log("ID: ",element.id," Nombre: " ,element.nombre," Nota: ",element.nota);
                });
            }

        }