jugar=function(){
    let aleatorio;
    aleatorio=lanzarDado();
    cambiarTexto("lblNumero", aleatorio)
    if(aleatorio>3){
        cambiarTexto("lblMensaje1","ES MAYOR A 3");
        cambiarTexto("lblMensaje2","GANASTE");
    }else{
        cambiarTexto("lblMensaje1","ES MENOR A 3");
        cambiarTexto("lblMensaje2","PERDISTE");
    }
}
lanzarDado=function(){
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let valorDado;
    aleatorio=Math.random();
    numeroMultiplicado=aleatorio*6;
    numeroEntero=parseInt(numeroMultiplicado);
    valorDado=numeroEntero+1;
    return valorDado;
}
