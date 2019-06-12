function CamposVacios(){
    let campVacios = false;
    let txtNombre = document.getElementById('nombre');
    let txtApellido = document.getElementById('apellido');
    let txtEmail = document.getElementById('email');
    let txtTelefono = document.getElementById('telefono');
    let txtDep = document.getElementById('dep');
    let txtTarjeta = document.getElementById('tarjeta');
    let txtTarjetaNom = document.getElementById('tarjetanom');
    let txtDireccion = document.getElementById('direccion');
    let txtNotas = document.getElementById('notas');
    if(txtNombre.value=="" || txtApellido.value=="" || txtEmail.value=="" || txtTelefono.value=="" || txtDep.value==""|| txtDep.value=="" || txtTarjeta.value=="" || txtTarjetaNom.value=="" || txtTelefono.value=="" || txtNotas.value==""){
        campVacios = true;
    }
    return campVacios;
}
function Formulario(){
    if(CamposVacios()){
        alert("LLene todos los campos!");
    } else{
        alert("Datos enviados con éxito");
        document.getElementById("notas").value = "";
        document.getElementById("direccion").value = "";
        document.getElementById("tarjetanom").value = "";
        document.getElementById("tarjeta").value = "";
        document.getElementById("dep").value = "Santa Ana";
        document.getElementById("telefono").value = "";
        document.getElementById("email").value = "";
        document.getElementById("apellido").value = "";
        document.getElementById("nombre").value = "";
    }
    
}