function mostrar(){
    document.getElementById("paraocultar").style.display = "block";
}
function ocultar(){
    document.getElementById("paraocultar").style.display = "none";
}

function mostrarg(){
    document.getElementById("ocultargalletas").style.display = "block";
}
function ocultarg(){
    document.getElementById("ocultargalletas").style.display = "none";
}
function mostrarc(){
    document.getElementById("ocultarcupcakes").style.display = "block";
}
function ocultarc(){
    document.getElementById("ocultarcupcakes").style.display = "none";
}

var numCompras = 0;
function addCarretilla(){
    numCompras += 1;
    let textoNum = document.getElementById('Carret');
    textoNum.innerHTML = numCompras;
}
function rmvCarretilla(){
    numCompras -= 1;
    let textoNum = document.getElementById('Carret');
    textoNum.innerHTML = numCompras;
}

function hideBoton(id){
    let idmostrar = id + 1;
    console.log("Entro!");
    document.getElementById(id).style.display = "none";
    document.getElementById(idmostrar).style.display = "block";
}
function mostrarBoton(id){
    let idmostrar = id - 1;
    console.log("Entro!");
    document.getElementById(id).style.display = "none";
    document.getElementById(idmostrar).style.display = "block";
}