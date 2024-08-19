let puntos=0;
let lanzamientos=5;
jugar=function(){
    let resultado;
    resultado=lanzarDado();
    console.log(resultado);
    mostrarCara(resultado);
    modificarLanzamientos();
    modificarPuntos(resultado);
}
modificarPuntos=function(numero){
    puntos=puntos+numero;
    cambiarTexto("lblPuntos",puntos)
    //si el jugador obtine mas de 20 puntos mostras un mensaje GANASTE
    if(puntos>=20){
        cambiarTexto("lblResultado","GANASTE");
        limpiar();
    }
}
modificarLanzamientos=function(){
    lanzamientos=lanzamientos-1;
    cambiarTexto("lblLanzamientos",lanzamientos)
    //si lanzamientos llega a 0 mostrar en pantalla el mensaje GAME OVER
    //invoca limpiar
    if(lanzamientos<=-1){
        cambiarTexto("lblResultado","GAME OVER");
        limpiar();
    }
}
lanzarDado=function(){
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    aleatorio=Math.random();
    aleatorioMultiplicado=aleatorio*6;
    aleatorioEntero=parseInt(aleatorioMultiplicado);
    valorDado=aleatorioEntero+1;
    return valorDado;
}
//muestra la imagen correspondiente al numero que recibe
//no retorna nada
mostrarCara=function(numero){
    if(numero==1){
        cambiarImagen("imgDado","dados1.png");
    }else if(numero==2){
        cambiarImagen("imgDado","dados2.png");
    }else if(numero==3){
        cambiarImagen("imgDado","dados3.png");
    }else if(numero==4){
        cambiarImagen("imgDado","dados4.png");
    }else if(numero==5){
        cambiarImagen("imgDado","dados5.png");
    }else if(numero==6){
        cambiarImagen("imgDado","dados6.png");
    }
}
limpiar=function(){
    puntos=0;
    lanzamientos=5;    
    cambiarTexto("lblPuntos",0);
    cambiarTexto("lblLanzamientos",5);
    cambiarImagen("imgDado","");

}