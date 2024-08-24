validarPassword=function(password) {
    let errores = "";
    
    // Verificar longitud
    if (password.length < 8) {
        errores += "El password debe tener al menos 8 caracteres, ";
    } else if (password.length > 16) {
        errores += "El password no debe exceder los 16 caracteres, ";
    }
    
    // Verificar mayúscula
    let tieneMayuscula = false;
    for (let i = 0; i < password.length; i++) {
        let charCode = password.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            tieneMayuscula = true;
            break; // Terminar el bucle al encontrar una mayúscula
        }
    }
    if (!tieneMayuscula) {
        errores += "el password debe contener al menos una letra mayuscula, ";
    }
    
    // Verificar dígito
    let tieneDigito = false;

    for (let i = 0; i < password.length; i++) {
        let charCode = password.charCodeAt(i);
        if (charCode >= 48 && charCode <= 57) {
            tieneDigito = true;
            break;
        }
    }
    if (!tieneDigito) {
        errores += "el password debe contener al menos un digito, ";
    }
    
    // Verificar carácter especial
    let tieneEspecial = false;
    
    for (let i = 0; i < password.length; i++) {
        let caracter = password.charCodeAt(i);
        if (caracter === 42  || caracter === 45 || caracter === 95 ) {
            tieneEspecial = true;
            break;
        }
    }
    if (!tieneEspecial) {
        errores += "el password debe contener al menos uno de estos caracteres especiales: *, -, _ ";
    }
    
    // Eliminar el espacio final si hay errores
    errores = errores.trim();
    
    if(errores === ""){
        return "";
    }else{
        return errores;
    }    
}
ejecutarValidacion=function () {
    // Recuperar la caja de texto de la página
    let password=recuperarTexto("txtPassword");

    // Invocar a validarPassword
    let resultado = validarPassword(password);

    // Mostrar el resultado
    if (resultado === "") {
        // Si el retorno es cadena vacía, mostrar mensaje de éxito
        mostrarTexto("lblValidacion","PASSWORD CORRECTO");
    } else {
        mostrarTexto("lblValidacion",resultado);
    }
}