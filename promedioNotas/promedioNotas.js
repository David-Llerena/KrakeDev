calcularPromedioNotas=function(){
    let nota1;
    let nota2;
    let nota3;
    let promedio;

    nota1=recuperarFlotante("txtNota1");
    nota2=recuperarFlotante("txtNota2");
    nota3=recuperarFlotante("txtNota3");

    promedio=calcularPromedio(nota1,nota2,nota3);

    cambiarTexto("lblPromedio",promedio.toFixed(2));

    // if(promedio>=7){
    //     cambiarImagen("imgPromedio","./imagenes/exito.gif");
    // }else{
    //     cambiarImagen("imgPromedio","./imagenes/fracaso.gif");
    // }

    if(promedio<5 && promedio>=0){//DEBE SER MENOS IGUAL A 0 PORQUE SI TOMA 0 ENTONCES PRESENTA DATOS INCORRECTOS CUANDO SAQUE 0
        cambiarImagen("imgPromedio","./imagenes/reprobado.gif");
        cambiarTexto("lblResultado","REPROBADO");
    }else if(promedio>=5 && promedio<=8){
        cambiarImagen("imgPromedio","./imagenes/buentrabajo.gif");
        cambiarTexto("lblResultado","BUEN TRABAJO");
    }else if(promedio>8 && promedio<=10){
        cambiarImagen("imgPromedio","./imagenes/excelente.gif");
        cambiarTexto("lblResultado","EXCELENTE");
    }else{
        cambiarImagen("imgPromedio","./imagenes/datosincorrectos.gif");
        cambiarTexto("lblResultado","DATOS INCORRECTOS");
    }

}