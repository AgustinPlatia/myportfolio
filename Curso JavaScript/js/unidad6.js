function iva(userNumber){
    var resultado = userNumber * 1.21;
    document.getElementById("p-tag").innerHTML = "<p>Resultado con IVA: "+resultado+"</p>";
}

function sinIva(){
var sinIva = "Resultado sin IVA: "+userNumber;
document.getElementById("p-tag").innerHTML = sinIva;
}
/*var sinIva = "Sin Iva: ";
document.write(sinIva + userNumber);*/