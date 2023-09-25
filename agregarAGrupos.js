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
const grupo = document.querySelector("#grupo");
const alumno = document.querySelector("#alumno");
const submitAlumnoGrupo = document.querySelector("#submitAlumnoGrupo");
const mostrarDatosGrupo = document.querySelector("#mostrarDatosGrupo");

//FUNCIÓN PARA CARGAR CLASES EN EL FORMULARIO
function cargarGrupos(){
    let listaGrupos = grupos.map(grupo => {
       return `<option value="${grupo.idGrupo}">${grupo.Nombre}</option>`;
    });
    grupo.innerHTML+=listaGrupos;
}

//FUNCIÓN PARA CARGAR ALUMNOS EN EL FORMULARIO
function cargarAlumnos(){
    let listaAlumnos = alumnos.map(alumno => {
       return `<option value="${alumno.Matricula}">${alumno.Nombre} ${alumno.Apellidos}</option>`;
    });
    alumno.innerHTML+=listaAlumnos;
}

///FUNCIÓN PARA GUARDAR FORMULARIO

submitAlumnoGrupo.addEventListener('click', e=>{
    if(!grupo.value && !alumno.value){

    }else{
        for(let x=0; x<grupos.length; x++){
            if(grupos[x].idGrupo==grupo.value){
                grupos[x].AlumnosGrupo.push(alumno.value);
            }
        }
        localStorage.setItem('arregloGrupos', JSON.stringify(grupos));

    }
});

//FUNCIÓN PARA ACTUALIZAR DIV PARA DETALLES DE CLASE SELECCIONADA
grupo.addEventListener('change', e=>{
    let cadena= `<h3>GRUPO  '${grupo.value}'</h3><br><br>`;
    let datos='';        
    for(let x=0; x<grupos.length; x++){
        if(grupos[x].idGrupo==grupo.value){
            datos = grupos[x].AlumnosGrupo.map(x => {
                return `<li>${x}</li>`;
            })        
        }
    }
       
    cadena+='<ul>'+datos+'</ul>';
    mostrarDatosGrupo.innerHTML=cadena;
});


///INICIAMOS PÁGINA
cargarGrupos();
cargarAlumnos();