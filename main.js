console.log("Entramos");
import  Alumno  from "./alumno.js";
import  Clase  from "./clase.js";
import  Grupo  from "./grupo.js";

const alumnos = []; //Array para manejar los alumnos
const clases = []; //Array para manejar las clases
const grupos = []; //Array para manejar los grupos


////FUNCIONES PARA PINTAR EN SU RESPECTIVA COLUMNA

///////ALUMNOS
const mostrarAlumnos = document.querySelector('#mostrarAlumnos');
const mostrarAlumnosRender = () =>{
    let listaAlumnos = '<ul>';
    alumnos.forEach(alumno =>{
        listaAlumnos+= `<li>${alumno.Matricula} ${ alumno.Apellidos} ${alumno.Nombre}</li>`;
    });
    listaAlumnos+='<ul>';
    mostrarAlumnos.innerHTML=listaAlumnos;
}

///////CLASES
const mostrarClases = document.querySelector('#mostrarClases');
const mostrarClasesRender = () =>{
    let listaClases = '<ul>';
    clases.forEach(clase =>{
        listaClases+= `<li>${clase.idClase} ${clase.Nombre}</li>`;
    });
    listaClases+='<ul>';
    mostrarClases.innerHTML=listaClases;
}

///////GRUPOS
const mostrarGrupos = document.querySelector('#mostrarGrupos');
const mostrarGruposRender = () =>{
    let listaGrupos = '<ul>';
    grupos.forEach(grupo =>{
        listaGrupos+= `<li>${grupo.idGrupo} ${grupo.Nombre}</li>`;
    });
    listaGrupos+='<ul>';
    mostrarGrupos.innerHTML=listaGrupos;
}


///////FUNCIONES PARA AGREGAR NUEVOS ALUMNOS, CLASES y GRUPOS

function nuevaClase(idClase, Nombre){
    let nuevaClase = new Clase(idClase, Nombre);
    clases.push(nuevaClase);
}

function nuevoGrupo(idGrupo, Nombre){
    let nuevoGrupo = new Grupo(idGrupo, Nombre);
    grupos.push(nuevoGrupo);
}

function nuevoAlumno(matricula, nombre, apellidos, edad){
    let nuevoAlumno = new Alumno(matricula, nombre, apellidos, edad);
    alumnos.push(nuevoAlumno);
}

nuevaClase('666', 'ESPAÑOL');
nuevoGrupo('666', 'A');
nuevoAlumno('666', 'EFREN', 'NARVAEZ MANTILLA', '37');


/* console.log(alumnos);
console.log(clases);
console.log(grupos);

console.log("PROBANDO"); */