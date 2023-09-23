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


////SELECTORES DE HTML
const mostrarAlumnos = document.querySelector('#mostrarAlumnos');
const mostrarClases = document.querySelector('#mostrarClases');
const mostrarGrupos = document.querySelector('#mostrarGrupos');


////FUNCIONES PARA PINTAR EN SU RESPECTIVA COLUMNA

///////ALUMNOS

const mostrarAlumnosRender = () =>{
    let listaAlumnos = '<h3>LISTADO ALUMNOS</h3><ul>';
    alumnos.forEach(alumno =>{
        listaAlumnos+= `<li>${alumno.Matricula} ${ alumno.Apellidos} ${alumno.Nombre}</li>`;
    });
    listaAlumnos+='<ul>';
    mostrarAlumnos.innerHTML=listaAlumnos;
}

///////CLASES
const mostrarClasesRender = () =>{
    let listaClases = '<h3>LISTADO CLASES</h3><ul>';
    clases.forEach(clase =>{
        listaClases+= `<li>${clase.idClase} ${clase.Nombre}</li>`;
    });
    listaClases+='<ul>';
    mostrarClases.innerHTML=listaClases;
}

///////GRUPOS
const mostrarGruposRender = () =>{
    let listaGrupos = '<h3>LISTADO GRUPOS</h3><ul>';
    grupos.forEach(grupo =>{
        listaGrupos+= `<li>${grupo.idGrupo} ${grupo.Nombre}</li>`;
    });
    listaGrupos+='<ul>';
    mostrarGrupos.innerHTML=listaGrupos;
}

///////FUNCIONES PARA AGREGAR NUEVOS ALUMNOS, CLASES y GRUPOS

function nuevaClase(){
    let idClase=document.querySelector('#idClaseForm').value;
    let Nombre=document.querySelector('#nombreClaseForm').value;
    let nuevaClase = new Clase(idClase, Nombre);
    clases.push(nuevaClase);
    mostrarClasesRender();
    localStorage.setItem('arregloClases', JSON.stringify(clases));
    }

function nuevoGrupo(){
    let idGrupo=document.querySelector('#idGrupoForm').value;
    let Nombre=document.querySelector('#nombreGrupoForm').value;
    let nuevoGrupo = new Grupo(idGrupo, Nombre);
    grupos.push(nuevoGrupo);
    mostrarGruposRender();
    localStorage.setItem('arregloGrupos', JSON.stringify(grupos));
}

function nuevoAlumno(){
    let matricula=document.querySelector('#matriculaAlumnoForm').value;
    let nombre=document.querySelector('#nombreAlumnoForm').value;
    let apellidos=document.querySelector('#apellidosAlumnoForm').value;
    let edad=document.querySelector('#edadAlumnoForm').value;

    let nuevoAlumno = new Alumno(matricula, nombre, apellidos, edad);
    alumnos.push(nuevoAlumno);
    mostrarAlumnosRender();
    localStorage.setItem('arregloAlumnos', JSON.stringify(alumnos));
}

/////////MANDAMOS A LLAMAR LOS MÉTODOS QUE INICIAN TODO

//RENDERIZMAOS LAS LISTAS
mostrarAlumnosRender();
mostrarGruposRender();
mostrarClasesRender();
