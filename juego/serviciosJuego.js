ordenAleatorio=function(){
    let numeroAleatorio;
    numeroAleatorio= Math.floor(Math.random() * 3) + 1;
    return numeroAleatorio;
}
generarElemento=function(){
    let numero=ordenAleatorio();
    if(numero===1){
        return "piedra";
    }else if(numero===2){
        return "papel";
    }else{
        return "tijera";
    }
}
determinarGanador=function(eleccionJugador1,eleccionJugador2){
    if(eleccionJugador1 === eleccionJugador2){
        return 0;
   
    }else if (
    (eleccionJugador1 === "piedra" && eleccionJugador2 === "tijera") ||
    (eleccionJugador1 === "papel" && eleccionJugador2 === "piedra") ||
    (eleccionJugador1 === "tijera" && eleccionJugador2 === "papel")
  ){
    return 1; // Gana el jugador 1
  }else{
    return 2; // Gana el jugador 2
    }
}
function generarRuta(nombre) {
    const carpeta = "./imagenes/";
    const extension = ".png";
    const ruta = carpeta+nombre+extension;
    return ruta;
  }






















































