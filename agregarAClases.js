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
const submitAlumnoClase = document.querySelector("#submitAlumnoClase");
const mostrarDatosClase = document.querySelector("#mostrarDatosClase");

//FUNCIÓN PARA CARGAR CLASES EN EL FORMULARIO
function cargarClases(){
    let listaClases = clases.map(clase => {
       return `<option value="${clase.idClase}">${clase.Nombre}</option>`;
    });
    clase.innerHTML+=listaClases;
}

//FUNCIÓN PARA CARGAR ALUMNOS EN EL FORMULARIO
function cargarAlumnos(){
    let listaAlumnos = alumnos.map(alumno => {
       return `<option value="${alumno.Matricula}">${alumno.Nombre} ${alumno.Apellidos}</option>`;
    });
    alumno.innerHTML+=listaAlumnos;
}

///FUNCIÓN PARA GUARDAR FORMULARIO

submitAlumnoClase.addEventListener('click', e=>{
    if(!clase.value && !alumno.value){

    }else{
        //Agregamos al alumno a una clase
        for(let x=0; x<clases.length; x++){
            if(clases[x].idClase==clase.value){
                clases[x].AlumnosInscritos.push(alumno.value);
            }
        }

        //Agregamos la clase y la calificacion en el objeto de alumno
        for(let x=0; x<alumnos.length; x++){
            if(alumnos[x].Matricula==alumno.value){
                let arreglo= [clase.value, '0'];
                alumnos[x].Calificaciones.push(arreglo);
            }
        }

        //Volvemos a dibujar
        dibujarAlumnos();
        //GUARDAMOS LA INFO
        localStorage.setItem('arregloClases', JSON.stringify(clases));
        localStorage.setItem('arregloAlumnos', JSON.stringify(alumnos));

    }
});

//FUNCIÓN PARA ACTUALIZAR DIV PARA DETALLES DE CLASE SELECCIONADA
clase.addEventListener('change', e=>{
    
    dibujarAlumnos();
});

///DIBUJAR A LOS ALUMNOS AL SELECCIONAR UNA CLASE O AL AGREGAR UN ALUMNO EN UNA CLASE
function dibujarAlumnos(){
    let cadena= `<h3>CLASE  '${clase.value}'</h3><br><br>`;
    let datos='';        
    for(let x=0; x<clases.length; x++){
        if(clases[x].idClase==clase.value){
            datos = clases[x].AlumnosInscritos.map(x => {
                return `<li>${x}</li>`;
            })        
        }
    }
       
    cadena+='<ul>'+datos+'</ul>';
    mostrarDatosClase.innerHTML=cadena;
}



///INICIAMOS PÁGINA
cargarClases();
cargarAlumnos();