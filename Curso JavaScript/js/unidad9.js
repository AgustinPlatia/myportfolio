function start(){
    theNombre = document.getElementById("nombre");
    theEdad = document.getElementById("edad");
    theMail = document.getElementById("mail");
    theNombre.addEventListener("input", validate, false);
    theEdad.addEventListener("input", validate, false);
    theMail.addEventListener("input", validate, false);
    validate();
}

function validate(){
    if(theNombre.value === null || theNombre.value === ""){
        theNombre.setCustomValidity("Escribe un nombre");
    } else {
        theNombre.setCustomValidity("");
    }

    if(theEdad.value === null || theEdad.value === ""){
        theEdad.setCustomValidity("Escribe tu edad");
    } else if(theEdad.value <= 17){
        theEdad.setCustomValidity("No se permite menores de la edad 18.");
    } else if(theEdad.value >= 99){
        theEdad.setCustomValidity("No sos Mirta Legrand.");
    } else {
        theEdad.setCustomValidity("");
    }

    if(theMail.values === null || theMail.value === ""){
        theMail.setCustomValidity("Ingresa un mail correcto.");
    } else {
        theMail.setCustomValidity("");
    }
}

window.addEventListener("load", start, false);

function toggle(){
    var theDiv = document.getElementById("div-1");
    if(theDiv.style.display === "none"){
        theDiv.style.display = "block";
    } else {
        theDiv.style.display = "none";
    }
}

function atacar(){
    let jugador = prompt("Atacar punto 0 (Primer punto), 1 (Segundo punto) o 2 (Tercer punto).");
    if(jugador == 0){
        alert("Atacaste el primer punto.");
    } else if(jugador == 1){
        alert("Atacaste el segundo punto.");
    } else if(jugador == 2){
        alert("Atacaste el tercer punto.");
    }

    let rival = Math.round(Math.random() * 2);
    if(rival == 0){
        alert("El rival eligió defender el primer punto.");
    } else if(rival == 1){
        alert("El rival eligió defender el segundo punto.");
    } else if(rival == 2){
        alert("El rival eligió defender el tercer punto.");
    }

    if(jugador == rival){
        alert("Derrota. Atacaste el punto defendido.");
    } else if(jugador == 0 && rival == 2){
        alert("Victoria. Atacaste un punto sin defensas.");
    } else if(jugador == 0 && rival == 1){
        alert("Victoria. Atacaste un punto sin defensas.");
    } else if(jugador == 1 && rival == 2){
        alert("Victoria. Atacaste un punto sin defensas.");
    } else if(jugador == 1 && rival == 0){
        alert("Victoria. Atacaste un punto sin defensas.");
    } else if(jugador == 2 && rival == 1){
        alert("Victoria. Atacaste un punto sin defensas.");
    } else if(jugador == 2 && rival == 0){
        alert("Victoria. Atacaste un punto sin defensas.");
    } else {
        alert("Acciones fuera de la Matrix dieron el origen de un agujero negro en el campo de juego, provocando la extincion de ambos lados.");
    }

}

/* function rival(){
    let rival = Math.round(Math.random() * 2);
    if(rival == 0){
        alert("El rival eligió el primer punto.");
    } else if(rival == 1){
        alert("El rival eligió el segundo punto.");
    } else if(rival == 2){
        alert("El rival eligió el tercer punto.");
    }
}

function resultado(){

    if(jugador == rival){
        alert("Ambos atacaron el mismo punto, dando inicio a la guerra.");
    } else if(jugador == 0 && rival == 2){
        alert("win");
    } else if(jugador == 1 && rival == 0){
        alert("win");
    } else if(jugador == 2 && rival == 1){
        alert("win");
    } else {
        alert("defeat");
    }
} */

/* Profe me gustaria poder combinar esto con lo de arriba, lo intente pero cuando se carga la pagina ya aparecen los avisos en rojo y no se como hacer para que los avisos en rojo solo aparezcan cuando hago click en confirmar.

var theNombre = document.getElementById("nombre");
var theEdad = document.getElementById("edad");
var theError = document.getElementById("error");      

var form = document.getElementById("myform");
form.addEventListener("submit", function(event){
    event.preventDefault();
    var errores = [];
    if(theNombre.value === null || theNombre.value === ""){
        errores.push("Escribe un nombre");
    }

    if(theEdad.value === null || theEdad.value === ""){
        errores.push("Escribe la edad");
    }
    error.innerHTML = errores.join(", ");
}) */