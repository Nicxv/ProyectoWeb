$(document).ready(function () {
    $("#form").submit(function (e) {
        e.preventDefault();
        var nombre = $("#name").val();
        var correo = $("#email").val();
        var contra = $("#password").val();
        var apellido =  $("#ape").val();
        var rut = $("#ru").val();

        var validarcorreo = /\w+@\w+\.+[a-z]/;
        var contraMayus = /[A-Z]/;
        var contraMinus = /[a-z]/;
        var contraNum = /[0-9]/;
        var contraCesp = /(?=.*[@#$%^&+=.()])/;

        let msjMostrar = "";
        let enviar = false;

        if(nombre.trim().length < 4 || nombre.trim().length > 10){
            msjMostrar = msjMostrar + "El nombre debe tener entre 4 y 10 caracteres.";
            enviar = true;
        }

        var letra = nombre.trim().charAt(0);
        if(!esMayuscula(letra)){
            msjMostrar += "<br>El nombre debe comenzar con mayúscula.";
            enviar = true;
        }
        if(!validarcorreo.test(correo)){
            msjMostrar = msjMostrar + "<br>El correo no es válido.";
            enviar = true;
        }
        if(contra.trim().length < 6 || contra.trim().length > 10){
            msjMostrar = msjMostrar + "<br>La contraseña debe tener entre 6 y 15 caracteres.";
            enviar = true;
        }
        if(!contraMayus.test(contra)){
            msjMostrar = msjMostrar + "<br>La contraseña debe tener por lo menos una letra mayúscula.";
            enviar = true;
        }
        if(!contraMinus.test(contra)){
            msjMostrar = msjMostrar + "<br>La contraseña debe tener por lo menos una letra minúscula.";
            enviar = true;
        }
        if(!contraNum.test(contra)){
            msjMostrar = msjMostrar + "<br>La contraseña debe tener por lo menos un número.";
            enviar = true;
        }
        if(!contraCesp.test(contra)){
            msjMostrar = msjMostrar + "<br>La contraseña debe tener por lo menos un caracter especial.";
            enviar = true;
        }




        if(enviar){
            $("#warnings").html(msjMostrar);
        }
        else{
            $("#warnings").html("Enviado");
        }
        
      

    });   

    function esMayuscula(letra){
        console.log("Estoy aqui");
        console.log(letra);
        console.log(letra.toUpperCase());

        if(letra == letra.toUpperCase()){
            return true;
        }
        else{
            return false;
        }
    }
    
    


});