let estado; //variable utilizada para saber si un usuario ha seleccionado una respuesta antes de continuar. 
let total = 0; //variable utilizada como contador, para ir calculando la cantidad de respuestas correctas. 

document.getElementById("lets-start").addEventListener("click", beginning);

//seccion preguntas acerca de video juegos 
document.getElementById("video_juegos").addEventListener("click", irPreguntasVideoG);
document.getElementById("continuar").addEventListener("click", primeraPreguntaVideoG);
document.getElementById("continuar1").addEventListener("click", segundaPreguntaVideoG);
document.getElementById("resultados").addEventListener("click", tercerPreguntaVideoG);

//seccion preguntas acerca de programacion
document.getElementById("programacion").addEventListener("click", irPreguntasProgramacion);
document.getElementById("continuarp1").addEventListener("click", primeraPreguntaProgramacion);
document.getElementById("continuarp2").addEventListener("click", segundaPreguntaProgramacion);
document.getElementById("resultadosp").addEventListener("click", tercerPreguntaProgramacion);
document.getElementById("finalizar").addEventListener("click", gracias);

//funcion utilizada para guardar en una variable el nombre introducido en la caja de texto, tambien oculta la pantalla de bienvenida  y nos muestras la pantalla donde escogemos el tema de la trivia y nos muestra en la  pantalla un saludo con el nombre ingresado. 
function beginning(){	
    let nombreUsuario = document.getElementById("nombre").value;
    ocultarMostrar("pantalla2" , "bienvenida");
    document.getElementById("saludo").innerHTML="Hola " + nombreUsuario + " ,   ¿Cúal de estos temas te interesa más?";
}
// funcion utilizada para ocultar y mostrar secciones en la pantalla. 
function ocultarMostrar (pantallaOn , pantallaOff){
    document.getElementById(pantallaOff).style.display = "none";
    document.getElementById(pantallaOn).style.display = "inline";
}
//funcion utilizada para ir a las preguntas acerca de video juegos. 
function irPreguntasVideoG(){
    ocultarMostrar("videoJuegos1","pantalla2");
}
//funcion utilizada para ir a las preguntas acerca de programacion. 
function irPreguntasProgramacion(){
    ocultarMostrar("programacion1","pantalla2");
}
//funcion utilizada para verificar la respuesta de la primera pregunta acerca de los  video juegos al dar click en continuar. Tambien oculta la seccion de la pregunta 1 y nos muestras la pregunta 2 
function primeraPreguntaVideoG(){
    alerta("incorrect","incorrect2", "correct" );
    if (estado == 'contestado'){
        ocultarMostrar("videoJuegos2","videoJuegos1");
    } 
}
//funcion utilizada para verificar la respuesta de la segunda pregunta acerca de los  video juegos al dar click en continuar. Tambien oculta la seccion de la pregunta 2 y nos muestras la pregunta 3.
function segundaPreguntaVideoG(){
    alerta("incorrect5","incorrect4", "correct2" );
    if (estado == 'contestado'){
    ocultarMostrar("videoJuegos3","videoJuegos2");
    } 
}
//funcion utilizada para verificar la respuesta de la tercera pregunta acerca de los  video juegos al dar click en mostrar resultados. Tambien oculta la seccion de la pregunta 3 y nos dirige a la pagina de los resultados. 
function tercerPreguntaVideoG(){
    alerta("incorrect6","incorrect7", "correct3" );
    if (estado == 'contestado'){
        ocultarMostrar("mostrarResultados","videoJuegos3");
        resultadosVer();
    } 
}
//funcion utilizada para verificar la respuesta de la primera pregunta acerca de programación al dar click en continuar. Tambien oculta la seccion de la pregunta 1 y nos muestras la pregunta 2 
function primeraPreguntaProgramacion(){
    alerta("incorrectp1","incorrectp2", "correctp1" );
    if (estado == 'contestado'){
        ocultarMostrar("programacion2","programacion1");
    } 
}
//funcion utilizada para verificar la respuesta de la segunda pregunta acerca de programación al dar click en continuar. Tambien oculta la seccion de la pregunta 2 y nos muestras la pregunta 3. 
function segundaPreguntaProgramacion(){
    alerta("incorrectp3","incorrectp4", "correctp2" );
    if (estado == 'contestado'){
        ocultarMostrar("programacion3","programacion2");
    } 
}
//funcion utilizada para verificar la respuesta de la tercera pregunta acerca de programacion al dar click en mostrar resultados. Tambien oculta la seccion de la pregunta 3 y nos dirige a la pagina de los resultados. 
function tercerPreguntaProgramacion(){
    alerta("incorrectp5","incorrectp6", "correctp3" );
    if (estado == 'contestado'){
        ocultarMostrar("mostrarResultados","programacion3");
        resultadosVer()
    } 
}
// funcion creada para mostrar los resultados de la trivia tanto para la opcion de video juego, cómo de programación, tambien esta la funcionalidad del botón volver a jugar.  
function resultadosVer(){
    document.getElementById("puntaje").innerHTML= " Obtuviste " + total + " respuesta(s) correcta(s), y " +(total*300)/3  + " puntos.";
    document.getElementById("volverjugar").addEventListener("click",prueba);
}
// funcion utilizada cuando se da click en el boton volver a jugar, oculta la seccion de resultados y nos vuelve a mostrar la pantalla para elegir que  opcion deseamos y reinicia el contador de las respuestas bien. 
function prueba(){
    ocultarMostrar("pantalla2","mostrarResultados");
    total = 0;
}
//función creada para notificar al usuario si la respuesta de la pregunta es correcta o incorrecta, tambien tiene un contador que va sumando las respuestas correctas. 
function alerta(opcInc1, opcInc2 , opcCort ){
    if(document.getElementById(opcInc1).checked | document.getElementById(opcInc2).checked == true) {
    alert("incorrecto");
    estado = 'contestado';
    total = total + 0;
    }
    else if(document.getElementById(opcCort).checked == true) {
        alert("correcto")
        estado = 'contestado';
        total = total + 1;
    }
    else {
        alert("Debes seleccionar una respuesta");
        estado = 'Seleccionar';
        total = total + 0;
    }
}

function gracias(){
    ocultarMostrar("agradecimientos","mostrarResultados");
}