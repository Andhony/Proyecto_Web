function mostrar(id,texto){
    let idmostrar = id + 1;
    document.getElementById(texto).style.display = "block";
    document.getElementById(id).style.display = "none";
    document.getElementById(idmostrar).style.display = "block";
}
function ocultar(id,texto){
    let idmostrar = id - 1;
    document.getElementById(texto).style.display = "none";
    document.getElementById(id).style.display = "none";
    document.getElementById(idmostrar).style.display = "block";
}

var numCompras = 0;
function addCarretilla(){
    numCompras += 1;
    let textoNum = document.getElementById('CarretT');
    let textoNum2 = document.getElementById('CarretC');
    textoNum.innerHTML = numCompras;
    textoNum2.innerHTML = numCompras;
}
function rmvCarretilla(){
    numCompras -= 1;
    let textoNum = document.getElementById('CarretT');
    let textoNum2 = document.getElementById('CarretC');
    textoNum.innerHTML = numCompras;
    textoNum2.innerHTML = numCompras;
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