import { Articulo } from "./Articulo.js";
import { Articulos } from "./Articulos.js";

let dbDatosArticulos=[];
let dbArt;

let fInit=()=>{
    let  art1=new Articulo(1,"camiseta",19.99);
    let art2=new Articulo(2,"Pantalon",39.99);
    let art3=new Articulo(3,"Zapatos",49.99);

    dbArt=new Articulos([art1,art2,art3]);
    dbDatosArticulos.push(art1,art2,art3);
    console.log("Datos de articulos inicializados");

    
}



(function () {
    console.log("Cargado con exito");
    fInit()
    console.log("dbArticulos: ",dbDatosArticulos)
    // filtrar los articulos
    
   let valorFiltrado= [4,5,6].filter( num => num>=5 );
   console.log(valorFiltrado);

   let articulosFiltrados=dbDatosArticulos.filter(articulo => articulo.precio>20);
    console.log(articulosFiltrados);

    // otra forma con destructuracion
    // let articulosFiltrados=dbDatosArticulos.filter( ({articulo}) => precio>20);


    dbArt.existeArticulo(2)?console.log("El articulo existe"):console.log("el articulo no existe");
    
    dbArt.filtrarPorPrecio(20);
    console.log("dbArt.filtrarPorPrecio(20)",dbArt.filtrarPorPrecio(20));

    console.log("filtra", dbArt.filtra( ({codigo}) => codigo<3 ));

})();

