let notas=[];

agregarElementos=function(){
    notas.push(5);
    notas.push(10);
    console.log(notas.length);
}
recorrerArreglo=function(){
    let notaR;
    for(let i=0;i<notas.length;i++){
        notaR=notas[i];
        console.log(notaR);
    }
}
probarAgregar=function(){
    let notaRecuperada;
    notaRecuperada=recuperarInt("txtNota");
    agregarNota(notaRecuperada);
}
agregarNota =function(nota){
    notas.push(nota);
}

calcularPromedio=function(){
    let sumarNotas=0;
    let promedio;
    for(let i=0;i<notas.length;i++){
        sumarNotas += notas[i];
    }
    promedio=sumarNotas/(notas.length);
    return promedio;
}
ejecutarPromedio=function(){
    let notaRecuperada;
    notaRecuperada=calcularPromedio();
    notaRecuperada=parseInt(notaRecuperada);
    mostrarTexto("lblPromedio", notaRecuperada);
}