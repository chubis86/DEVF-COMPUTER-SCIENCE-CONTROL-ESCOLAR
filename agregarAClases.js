let alumnos = []; //Array para manejar los alumnos
let clases = []; //Array para manejar las clases
let grupos = []; //Array para manejar los grupos

//Vamos a cargar valores guardados en localstorage
try{
alumnos = JSON.parse(localStorage.getItem('arregloAlumnos'));
}catch(e){}
try{
clases = JSON.parse(localStorage.getItem('arregloClases'));
}catch(e){}
try{
grupos = JSON.parse(localStorage.getItem('arregloGrupos')); 
}catch(e){}


////ELEMENTOS HTML
const clase = document.querySelector("#clase");
const alumno = document.querySelector("#alumno");

//FUNCIÓN PARA CARGAR CLASES EN EL FORMULARIO
function cargarClases(){
    let listaClases = clases.map(clase => {
       return `<option value="${clase.idClase}">${clase.Nombre}</option>`;
    });
    console.log(listaClases);
    clase.innerHTML='<ul>'+listaClases+'</ul>';
}

//FUNCIÓN PARA CARGAR ALUMNOS EN EL FORMULARIO
function cargarAlumnos(){
    let listaAlumnos = alumnos.map(alumno => {
       return `<option value="${alumno.Matricula}">${alumno.Nombre} ${alumno.Apellidos}</option>`;
    });
    alumno.innerHTML='<ul>'+listaAlumnos+'</ul>';
}



///INICIAMOS PÁGINA
cargarClases();
cargarAlumnos();