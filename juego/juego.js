let puntosUsuario=0;
let puntosComputador=0;
jugar=function(seleccionado){
    let elemento=generarElemento();
    let imgRuta=generarRuta(elemento);
    let resultado=determinarGanador(elemento,seleccionado);
    if(resultado===0){
        mostrarTexto("lblResultado","EMPATE")
    }else if(resultado===1){
        mostrarTexto("lblResultado","PERDISTE LA PARTIDA!!");
        puntosComputador=puntosComputador+1;
        mostrarTexto("lblPuntajeComputador",puntosComputador);
        if(puntosComputador === 5){
            mostrarTexto("resultadoGanador","EL COMPUTADOR TE HA VENCIDO");
        }
    }else if(resultado===2){
        mostrarTexto("lblResultado","GANASTE LA PARTIDA!!");
        puntosUsuario=puntosUsuario+1;
        mostrarTexto("lblPuntajeUsuario",puntosUsuario);
        if(puntosUsuario ===5){
            mostrarTexto("resultadoGanador","HAS GANADO EL JUEGO");
        }
    }
    mostrarImagen("imgResultado",imgRuta);
}
limpiar=function(){
    mostrarTexto("lblResultado","");
    mostrarTexto("lblPuntajeUsuario",0);
    mostrarTexto("lblPuntajeComputador",0);
    mostrarTexto("resultadoGanador","");
    mostrarImagen("imgResultado","./imagenes/computador.png");
}