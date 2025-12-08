let students=[];

let enrollments=[];

let courses=[];

// Fetch

async function getStudents() {
    const datosEstudiantes= await fetch("http://localhost:3005/students");
    students= await datosEstudiantes.json();
    return students;
}


async function getEnrollment() {
    const datosEnrollments=await fetch("http://localhost:3005/enrollments");
    enrollments=await datosEnrollments.json();
    return enrollments;
}

async function getCourses() {
    const datosCourses= await fetch("http://localhost:3005/courses");
    courses=await datosCourses.json();
    return courses;
}


//login
function guardarCredenciales(estudiante) {
    localStorage.setItem("user",estudiante.name);
    localStorage.setItem("email",estudiante.email);
}

function cargarInicio() {
    if (window.location.pathname.includes("login.html")) return;


    if (!localStorage.getItem("user") || !localStorage.getItem("email")) {
        window.location.href = "login.html";
    }
}


function validarSesion() {
    const boton=document.getElementById("boton");

    if(!boton) return; 

    boton.addEventListener("click",() =>{

        let user=document.getElementById("user").value;
        let email=document.getElementById("email").value;


        let estudiante=students.find(student => 
            student.name===user && student.email===email);

        if (estudiante) {
            guardarCredenciales(estudiante);
            window.location.href="index.html"
        } else {
            alert("El usuario o contraseña no existe")
        }

    })
}



// INDEX

function cards(padre) {
    padre.innerHTML = "";
    padre.style.display = "flex";

    enrollments.forEach(enr => {
        let fragment = card(enr)
        padre.appendChild(fragment);
    });


}




function card(enrollment) {
    const div = document.createElement("div");
    div.id = `Enrollment${enrollment.id}`;
    div.style.cssText = "border:1px solid black; margin:15px; padding:10px";


    div.innerHTML = `
                <h3>Enrollment ${enrollment.id} </h3>
                <p>Course id:${enrollment.courseId}</p>
                <p>Student id:${enrollment.studentId}</p>
            `;
    return div
}


//   MAIN

document.addEventListener("DOMContentLoaded", async () => {
    await getStudents();
    await getEnrollment();
    await getCourses();

    const container=document.getElementById("container");
    if (container) {
        cards(container);
    }

    validarSesion();
    cargarInicio();

    
})