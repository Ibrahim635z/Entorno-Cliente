import db  from './db.json' with {type: 'json'};


const crearNodo= (numero) => {

    for (let i = 0; i < numero; i++) {

    const arrEstudiantes=db.students;
    const contenedor= document.getElementById("contenedor");
    const nuevoP= document.createElement("p");
    
    // const nuevoTexto= document.createTextNode(`Hola ${i}`)

    nuevoP.textContent=`Hola ${i}`;
    contenedor.appendChild(nuevoP);
        
    }
}

const crearEstudiante=(db) => {

    const estudiantes=db.students;
    

    estudiantes.forEach(element => {
        const div=document.createElement("div");
        const contenedor=document.getElementById("contenedor");
        div.textContent="ID: " + element.id;
        contenedor.appendChild(div);


        const pname=document.createElement("p");
        pname.textContent="Nombre: " + element.name; 
        div.appendChild(pname);


        const plevel=document.createElement("p");
        plevel.textContent="Nivel: " + element.level; 
        div.appendChild(plevel);

        div.style.border="1px solid black";
        contenedor.style.border = "1px solid black";
        contenedor.style.padding = "20px"
        contenedor.style.display="flex";
        div.style.display = "flex";
        div.style.margin = "20px";
        div.style.padding = "20px";
        div.style.flexDirection = "column";
        });

        document.getElementById("activo").addEventListener("change", () => {
            document.getElementById("contenedor").innerHTML=""; 
            
            
            const students=db.students;
            
            
            students.forEach(element => {
                const div=document.createElement("div");
                const contenedor=document.getElementById("contenedor");
                 if (element.active) {
                    
                div.textContent="ID: " + element.id;
                contenedor.appendChild(div);


                const pname=document.createElement("p");
                pname.textContent="Nombre: " + element.name; 
                div.appendChild(pname);


                const plevel=document.createElement("p");
                 plevel.textContent="Nivel: " + element.level; 
                 div.appendChild(plevel);

                

                }  
                div.style.border="1px solid black";
        contenedor.style.border = "1px solid black";
        contenedor.style.padding = "20px"
        contenedor.style.display="flex";
        div.style.display = "flex";
        div.style.margin = "20px";
        div.style.padding = "20px";
        div.style.flexDirection = "column";
            });
           
        })
}


const cambioActivos= () => {

    
    
}



const main= () => {

    //crearNodo(3);
    crearEstudiante(db);
}

document.addEventListener("DOMContentLoaded",main);