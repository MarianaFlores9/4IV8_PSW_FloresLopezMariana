function validarn(e){

    var teclado = (document.all)?e.KeyCode : e.which;
    /* vamos aplicar una prueba logica a todo el teclado
    a partir de un patron este patron debe de ser
    numerico y solo acepta 0-9 . todo lo demas lo deja
    escapar */
    if(teclado==8) return true;
    var patron = /[0-9\d.]/;

    var probar = String.fromCharCode(teclado);

    return patron.test(probar);

}
function validarp(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /^[a-zA-Z ]*$/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

//validar registro de alumnos
function validar(formulario){
    //validar long nombre
    if(formulario.nombre.value.length < 5){
        alert("Escriba por lo menos 5 Caracteres para el nombre");
        formulario.nombre.focus();
        return false;
    }else if(formulario.nombre.value.length  >= 20){
        alert("Solo puedes escribir 20 Caracteres para el nombre");
        formulario.nombre.focus();
        return false;
    }

    //validar long apellido paterno
    if(formulario.appat.value.length < 3){
        alert("Escriba por lo menos 5 Caracteres para el apellido paterno");
        formulario.appat.focus();
        return false;
    }else if(formulario.appat.value.length  >= 30){
        alert("Solo puedes escribir 30 Caracteres para el apellido paterno");
        formulario.appat.focus();
        return false;
    }

    //validar long apellido materno
    if(formulario.apmat.value.length < 3){
        alert("Escriba por lo menos 5 Caracteres para el apellido materno");
        formulario.apmat.focus();
        return false;
    }else if(formulario.apmat.value.length  >= 30){
        alert("Solo puedes escribir 30 Caracteres para el apellido materno");
        formulario.apmat.focus();
        return false;
    }

    var checkOK = "QWERTYUIOPASDFGHJKLZXCVBNMÑ"
    +"qwertyuiopasdfghjklñzxcvbnm" + " "+ "áéíóúÁÉÍÓÚÜü";

    var checkNombre = formulario.nombre.value;
    var checkAppat = formulario.appat.value;
    var checkApmat = formulario.apmat.value;

    var allValido = true;

    //validar nombre
    for(var i = 0; i < checkNombre.length; i++){
        var ch = checkNombre.charAt(i);
        for(var j = 0; j < checkOK.length; j++){
            if(ch == checkOK.charAt(j))
            break;
        }
        if(j == checkOK.length){
            allValido = false;
            break;
        }
    }

    if(!allValido){
        alert("Escriba unicamente letras en el campo de nombre");
        formulario.nombre.focus();
        return false;
    }

    //validar appat
    for(var i = 0; i < checkAppat.length; i++){
        var ch = checkAppat.charAt(i);
        for(var j = 0; j < checkOK.length; j++){
            if(ch == checkOK.charAt(j))
            break;
        }
        if(j == checkOK.length){
            allValido = false;
            break;
        }
    }

    if(!allValido){
        alert("Escriba unicamente letras en el campo de apellido paterno");
        formulario.appat.focus();
        return false;
    }

    //validar apmat
    for(var i = 0; i < checkApmat.length; i++){
        var ch = checkApmat.charAt(i);
        for(var j = 0; j < checkOK.length; j++){
            if(ch == checkOK.charAt(j))
            break;
        }
        if(j == checkOK.length){
            allValido = false;
            break;
        }
    }

    if(!allValido){
        alert("Escriba unicamente letras en el campo de apellido materno");
        formulario.apmat.focus();
        return false;
    }
    //validar long telefono
    if(formulario.telefono.value.length != 10){
        alert("Escriba por los 10 digitos del telefono");
        formulario.telefono.focus();
        return false;
    }
    var checkOK = "0123456789";

    var checkStr = formulario.telefono.value;

    var allValido = true;

    for(var i = 0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for(var j = 0; j < checkOK.length; j++){
            if(ch == checkOK.charAt(j))
            break;
        }
        if(j == checkOK.length){
            allValido = false;
            break;
        }
    }

    if(!allValido){
        alert("Escriba unicamente numeros en el campo de telefono");
        formulario.telefono.focus();
        return false;
    }
    //validar long boleta
    if(formulario.boleta.value.length != 10){
        alert("Escriba los 10 digitos de la boleta");
        formulario1.boleta.focus();
        return false;
    }
    var checkOK = "0123456789";

    var checkBoleta = formulario.boleta.value;

    var allValido = true;

    for(var i = 0; i < checkBoleta.length; i++){
        var ch = checkBoleta.charAt(i);
        for(var j = 0; j < checkOK.length; j++){
            if(ch == checkOK.charAt(j))
            break;
        }
        if(j == checkOK.length){
            allValido = false;
            break;
        }
    }

    if(!allValido){
        alert("Escriba unicamente numeros en el campo de boleta");
        formulario.boleta.focus();
        return false;
    }


}

//validar modificacion de alumnos
function validary(formulario1){
    //validar long nombre
    if(formulario1.nombre.value.length < 5){
        alert("Escriba por lo menos 5 Caracteres para el nombre");
        formulario1.nombre.focus();
        return false;
    }else if(formulario1.nombre.value.length  >= 20){
        alert("Solo puedes escribir 20 Caracteres para el nombre");
        formulario1nombre.focus();
        return false;
    }

    //validar long apellido paterno
    if(formulario1.appat.value.length < 3){
        alert("Escriba por lo menos 5 Caracteres para el apellido paterno");
        formulario1.appat.focus();
        return false;
    }else if(formulario1.appat.value.length  >= 30){
        alert("Solo puedes escribir 30 Caracteres para el apellido paterno");
        formulario1.appat.focus();
        return false;
    }

    //validar long apellido materno
    if(formulario1.apmat.value.length < 3){
        alert("Escriba por lo menos 5 Caracteres para el apellido materno");
        formulario1.apmat.focus();
        return false;
    }else if(formulario1.apmat.value.length  >= 30){
        alert("Solo puedes escribir 30 Caracteres para el apellido materno");
        formulario1.apmat.focus();
        return false;
    }

    var checkOK = "QWERTYUIOPASDFGHJKLZXCVBNMÑ"
    +"qwertyuiopasdfghjklñzxcvbnm" + " "+ "áéíóúÁÉÍÓÚÜü";

    var checkNombre = formulario1.nombre.value;
    var checkAppat = formulario1.appat.value;
    var checkApmat = formulario1.apmat.value;

    var allValido = true;

    //validar nombre
    for(var i = 0; i < checkNombre.length; i++){
        var ch = checkNombre.charAt(i);
        for(var j = 0; j < checkOK.length; j++){
            if(ch == checkOK.charAt(j))
            break;
        }
        if(j == checkOK.length){
            allValido = false;
            break;
        }
    }

    if(!allValido){
        alert("Escriba unicamente letras en el campo de nombre");
        formulario1.nombre.focus();
        return false;
    }

    //validar appat
    for(var i = 0; i < checkAppat.length; i++){
        var ch = checkAppat.charAt(i);
        for(var j = 0; j < checkOK.length; j++){
            if(ch == checkOK.charAt(j))
            break;
        }
        if(j == checkOK.length){
            allValido = false;
            break;
        }
    }

    if(!allValido){
        alert("Escriba unicamente letras en el campo de apellido paterno");
        formulario1.appat.focus();
        return false;
    }

    //validar apmat
    for(var i = 0; i < checkApmat.length; i++){
        var ch = checkApmat.charAt(i);
        for(var j = 0; j < checkOK.length; j++){
            if(ch == checkOK.charAt(j))
            break;
        }
        if(j == checkOK.length){
            allValido = false;
            break;
        }
    }

    if(!allValido){
        alert("Escriba unicamente letras en el campo de apellido materno");
        formulario1.apmat.focus();
        return false;
    }
    //validar long telefono
    if(formulario1.telefono.value.length != 10){
        alert("Escriba los 10 digitos del telefono");
        formulario1.telefono.focus();
        return false;
    }
    var checkOK = "0123456789";

    var checkStr = formulario1.telefono.value;

    var allValido = true;

    for(var i = 0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for(var j = 0; j < checkOK.length; j++){
            if(ch == checkOK.charAt(j))
            break;
        }
        if(j == checkOK.length){
            allValido = false;
            break;
        }

    }

    if(!allValido){
        alert("Escriba unicamente numeros en el campo de telefono");
        formulario1.telefono.focus();
        return false;
    }

    //validar long boleta
    if(formulario1.boleta.value.length != 10){
        alert("Escriba los 10 digitos de la boleta");
        formulario1.boleta.focus();
        return false;
    }
    var checkOK = "0123456789";

    var checkBoleta = formulario1.boleta.value;

    var allValido = true;

    for(var i = 0; i < checkBoleta.length; i++){
        var ch = checkBoleta.charAt(i);
        for(var j = 0; j < checkOK.length; j++){
            if(ch == checkOK.charAt(j))
            break;
        }
        if(j == checkOK.length){
            allValido = false;
            break;
        }
    }

    if(!allValido){
        alert("Escriba unicamente numeros en el campo de boleta");
        formulario1.boleta.focus();
        return false;
    }

}

function boleta(){
   //validar long boleta
   if(elimina.boletaelimina.value.length != 10){
    alert("Escriba los 10 digitos de la boleta");
    elimina.boletaelimina.focus();
    return false;
}
var checkOK = "0123456789";

var checkBoleta = elimina.boletaelimina.value;

var allValido = true;

for(var i = 0; i < checkBoleta.length; i++){
    var ch = checkBoleta.charAt(i);
    for(var j = 0; j < checkOK.length; j++){
        if(ch == checkOK.charAt(j))
        break;
    }
    if(j == checkOK.length){
        allValido = false;
        break;
    }
}

if(!allValido){
    alert("Escriba unicamente numeros en el campo de boleta");
    elimina.boletaelimina.focus();
    return false;
}
 
}