$(document).ready(function () {
    $("#form").submit(function (e) {
        e.preventDefault();
        var nombre = $("#name").val();
        var correo = $("#email").val();
        var contra = $("#password").val();
        var apellido =  $("#ape").val();
        var rut = $("#ru").val();

        let msjMostrar = "";
        let enviar = false;

        if(nombre.trim().length < 4 || nombre.trim().length > 10){
            msjMostrar = msjMostrar + "El nombre debe tener entre 4 y 10 caracteres";
            enviar = true;
        }

        var letra = nombre.trim().charAt(0);
        if(!esMayuscula(letra)){
            msjMostrar += "<br>El nombre debe comenzar con mayúscula";
            enviar = true;
        }

        if(enviar){
            $("#warnings").html(msjMostrar);
        }
        else{
            $("#warnings").html("Enviado");
        }



    });    

});