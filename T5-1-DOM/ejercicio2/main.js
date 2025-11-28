


const formatearDatos=() =>{

    const array=[
        { codigo:1, dni:"4455544X", Nombre:"Juan Lopez Lopez", edad:18 },
        { codigo:2, dni:"7778888X", Nombre:"Luis Mateo Lopez", edad:25 },
        { codigo:3, dni:"6654545M", Nombre:"Pedro Gutierrez Lopez", edad:41 },
        { codigo:4, dni:"9998897X", Nombre:"MAria Gutierrez Lopez", edad:32 },
    ]

    console.log(array);
    const body=document.getElementsByTagName("body")[0];
    const table=document.createElement("table");
    body.appendChild(table);
    table.style.border="1px solid black";
    
    table.innerHTML=`<thead>
                    <tr>
                    <th>Codigo</th>
                    <th>Dni</th>
                    <th>Nombre</th>
                    <th>Edad</th>
                    </tr>
                    </thead>
                    <tbody>
                    </tbody>`
    

    const tbody= table.querySelector("tbody");

    array.forEach(element => {
        const fila=document.createElement("tr");

        fila.innerHTML=`
            <td>${element.codigo}</td>
            <td>${element.dni}</td>
            <td>${element.Nombre}</td>
            <td>${element.edad}</td>
        `

        tbody.appendChild(fila);
    });

}



const main= () => {

    formatearDatos();

}

document.addEventListener("DOMContentLoaded",main);