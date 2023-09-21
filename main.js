
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

function nuevaClase(){
    let idClase=document.querySelector('#idClaseForm').value;
    let Nombre=document.querySelector('#nombreClaseForm').value;
    let nuevaClase = new Clase(idClase, Nombre);
    clases.push(nuevaClase);
    mostrarClasesRender();
}

function nuevoGrupo(){
    let idGrupo=document.querySelector('#idGrupoForm').value;
    let Nombre=document.querySelector('#nombreGrupoForm').value;
    let nuevoGrupo = new Grupo(idGrupo, Nombre);
    grupos.push(nuevoGrupo);
    console.log(grupos);
    mostrarGruposRender();
    console.log("Estamos");
}

function nuevoAlumno(){
    let matricula=document.querySelector('#matriculaAlumnoForm').value;
    let nombre=document.querySelector('#nombreAlumnoForm').value;
    let apellidos=document.querySelector('#apellidosAlumnoForm').value;
    let edad=document.querySelector('#edadAlumnoForm').value;

    let nuevoAlumno = new Alumno(matricula, nombre, apellidos, edad);
    alumnos.push(nuevoAlumno);
    mostrarAlumnosRender();
}
