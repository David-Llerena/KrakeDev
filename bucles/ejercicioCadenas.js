recorrerCadena=function(cadena){
    let caracter;

    for(let posicion=0;posicion<cadena.length;posicion++){
        caracter=cadena.charAt(posicion);
        console.log("Caracter "+ caracter+ " Posicion " + posicion);
    }
}
ejecutarPrueba1=function(){
    let mensaje;
    mensaje=recuperarTexto("txtCadena");
    recorrerCadena(mensaje);
}
recorrerCadenaInvertido=function(cadena){
    let cadenaInvertida = "";
    for (let i = cadena.length - 1; i >= 0; i--) {
        cadenaInvertida = cadenaInvertida.concat(cadena.charAt(i));
    }
    mostrarTexto("lblCadena",cadenaInvertida);
}
ejecutarPrueba2=function(){
    let mensaje;
    mensaje=recuperarTexto("txtCadena");
    recorrerCadenaInvertido(mensaje);
}
buscarLetra=function(cadena,letra){
    let letraIterada;
    let existeLetra=false;
    for(let i=0;i<cadena.length;i++){
        letraIterada=cadena.chartAt(i);
        if(letraIterada==letra){
            existeLetra=true;
        }
    }
    if(existeLetra==true){
        return true;
    }else{
        return false;
    }
}
contarMayusculas=function(cadena){
    let letra;
    let contadorMayusculas;
    for(let i=0;i<cadena.length;i++){
        letra=cadena.chartAt(i);
        if(esMayuscula(letra)){
            contadorMayusculas++;
        }
        console.log(contadorMayusculas);
    }
}