var nombre = document.getElementById("name");
var correo = document.getElementById("email");
var contra = document.getElementById("password");
var apellido = document.getElementById("ape");
var rut = document.getElementById("ru");
var contra2 = document.getElementById("password2");

const formulario = document.getElementById("form");
var msj = document.getElementById("warnings");

formulario.addEventListener('submit',e =>{
    e.preventDefault();
    let msjMostrar ="";
    let enviar = false;

    if(nombre.value.length < 4 || nombre.value.length > 10){
        msjMostrar = msjMostrar + "El nombre debe tener entre 4 y 10 caracteres";
        enviar = true;
    }

    var letra = nombre.value.charAt(0);
    if(!esMayuscula(letra)){
        msjMostrar += "<br>El nombre debe comenzar con mayúscula";
        enviar = true;
    }

    if(enviar){
        msj.innerHTML = msjMostrar;
    }
    else{
        msj.innerHTML = "Enviado";
    }


});


function esMayuscula(letra){
    if(letra == letra.toUpperCase()){
        return true;
    }
    else{
        return false;
    }
}