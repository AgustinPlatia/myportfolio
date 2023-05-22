function start(){
    thebrand=document.getElementById("brand");
    thecarname=document.getElementById("carname");
    thecaryear=document.getElementById("caryear");
    thebrand.addEventListener("input",validatebrand, true);
    thecarname.addEventListener("input",validatecarname, true);
    thecaryear.addEventListener("input",validatecaryear, true);
}

function validatebrand(){
     if(thebrand.value === "" || thebrand.value === null){
        thebrand.setCustomValidity("inserte algo");
     }
}

function validatecarname(){
    if(thecarname.value === ""){
        thecarname.setCustomValidity("inserte algo");
    }
}

function validatecaryear(){
    if(thecaryear.value === ""){
        thecaryear.setCustomValidity("Campo vacio");
    }
}

function sendbutton(){
    var validatione = document.forum.checkValidity();
    if (validatione){
        document.forum.submit();
    } else {

    }
}

window.addEventListener("load", start, false); 