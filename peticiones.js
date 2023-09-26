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
const alumnoNombreBuscar = document.querySelector("#alumnoNombreBuscar");
const alumnoApellidosBuscar = document.querySelector("#alumnoApellidosBuscar");
const alumnoMatriculaBuscar = document.querySelector("#alumnoMatriculaBuscar");
const resultadoAlumnoNombreBuscar  = document.querySelector("#resultadoAlumnoNombreBuscar");
const resultadoAlumnoApellidosBuscar  = document.querySelector("#resultadoAlumnoApellidosBuscar");
const resultadoAlumnoMatriculaBuscar  = document.querySelector("#resultadoAlumnoMatriculaBuscar");

//FUNCIÓN PARA BUSCAR ALUMNOS POR NOMBRE
/* alumnoNombreBuscar.addEventListener('keydown', e=>{

 }); */
 function alumnoNombreBuscarFunction(){
    if(alumnoNombreBuscar.value!=''){
        let datos=alumnos.filter(alumno =>  alumno.Nombre.includes(alumnoNombreBuscar.value));
        let cadena='';
        datos.forEach(dato => {
            cadena+=`<tr><td>${dato.Matricula}</td> <td>${dato.Nombre}</td> <td>${dato.Apellidos}</td></tr>`;
        });
        resultadoAlumnoNombreBuscar.innerHTML=cadena; 
    }else{
        alumnoNombreBuscar.value='';
    }     
}

function alumnoApellidosBuscarFunction(){
    if(alumnoApellidosBuscar.value!=''){
        let datos=alumnos.filter(alumno =>  alumno.Apellidos.includes(alumnoApellidosBuscar.value));
        let cadena='';
        datos.forEach(dato => {
            cadena+=`<tr><td>${dato.Matricula}</td> <td>${dato.Nombre}</td> <td>${dato.Apellidos}</td></tr>`;
        });
        resultadoAlumnoApellidosBuscar.innerHTML=cadena; 
    }else{
        alumnoApellidosBuscar.value='';
    }     
}
const alumnoMatriculaBuscarFunction= alumnoMatriculaBuscar.addEventListener('keyup', e =>{
    console.log(e);
    if(e.key!= 'Backspace'){//presionen backspace
        let datos=alumnos.filter(alumno =>  alumno.Matricula.includes(alumnoMatriculaBuscar.value));
        let cadena='';
        datos.forEach(dato => {
            cadena+=`<tr><td>${dato.Matricula}</td> <td>${dato.Nombre}</td> <td>${dato.Apellidos}</td></tr>`;
        });
        resultadoAlumnoMatriculaBuscar.innerHTML=cadena; 
    }else{
        alumnoMatriculaBuscar.value='';
        resultadoAlumnoMatriculaBuscar.innerHTML='';
    }
});