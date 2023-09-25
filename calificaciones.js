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
const datosAlumnos  = document.querySelector("#datosAlumnos");
const calificacionPromedioClase = document.querySelector("#calificacionPromedioClase");

//FUNCIÓN PARA CARGAR CLASES EN EL FORMULARIO
function cargarClases(){
    let listaClases = clases.map(clase => {
       return `<option value="${clase.idClase}">${clase.Nombre}</option>`;
    });
    clase.innerHTML+=listaClases;
}


//FUNCIÓN PARA ACTUALIZAR DIV PARA DETALLES DE CLASE SELECCIONADA
clase.addEventListener('change', e=>{
   dibujarAlumnos();
});

///DIBUJAR A LOS ALUMNOS AL SELECCIONAR UNA CLASE O AL AGREGAR UN ALUMNO EN UNA CLASE
function dibujarAlumnos(){
    let cadena='';
    for(let x=0; x<alumnos.length; x++){
        for(let y=0; y<alumnos[x].Calificaciones.length; y++){
            if(alumnos[x].Calificaciones[y][0]==clase.value){
                cadena+= `<tr>
                          <td>${alumnos[x].Matricula}</td>
                          <td>${alumnos[x].Nombre} ${alumnos[x].Apellidos}</td>
                          <td><input type="number"  id="${alumnos[x].Matricula}" value="${alumnos[x].Calificaciones[0][1]}" onchange="guardarCalificacion('${alumnos[x].Matricula}', '${clase.value}')" step="1"></td>     
                          </tr>`;
                     
            }
        }
        
    }
    promedio();       
    datosAlumnos.innerHTML=cadena;
}

//Guardar calificación
function guardarCalificacion(Matricula, claseID){
    let calificacion = document.getElementById(Matricula);
    //console.log(Matricula + " " + claseID + " " + calificacion.value) ;
    for(let x=0; x<alumnos.length; x++){
        if(alumnos[x].Matricula==Matricula){
            for(let y=0; y<alumnos[x].Calificaciones.length; y++){
                if(alumnos[x].Calificaciones[y][0]==clase.value){
                    alumnos[x].Calificaciones[y][1]=calificacion.value;         
                }  
            }    
        }
    }
    promedio();
    localStorage.setItem('arregloAlumnos', JSON.stringify(alumnos));

}

//FUNCIÓN MOSTRAR PROMEDIO CLASE
function promedio(){
    let suma=0;
    let contador=0;
    let promedio=0;
    for(let x=0; x<alumnos.length; x++){
        for(let y=0; y<alumnos[x].Calificaciones.length; y++){
                if(alumnos[x].Calificaciones[y][0]==clase.value){
                    suma+=parseInt(alumnos[x].Calificaciones[y][1]);
                    contador++;         
                }  
                
        }
    }
    promedio=suma/contador;
    calificacionPromedioClase.innerHTML = `<h4>El promedio de la clase ${clase.value} es: ${promedio} </h4>`;

}


///INICIAMOS PÁGINA
cargarClases();