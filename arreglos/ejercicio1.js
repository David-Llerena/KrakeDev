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
    mostrarNotas();
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
generarTabla=function(){
    let contenidoTabla="";
    let cmpTabla=document.getElementById("divTabla");
    contenidoTabla+="<table> <tr><td>UNO</td></tr>"+
    "<td>DOS</td></tr></table>";
    cmpTabla.innerHTML=contenidoTabla;
}
mostrarNotas=function(){
    let cmpTabla=document.getElementById("divTabla");
    let contenidoTabla="<table><tr><th>NOTA</th></tr>";
    let miNota;
    for(let i=0; i<notas.length;i++){
        miNota=notas[i];
        contenidoTabla+="<tr><td>";
        contenidoTabla+=miNota;
        contenidoTabla+="</tr></td>";
    }
    contenidoTabla+="</table>";
    cmpTabla.innerHTML=contenidoTabla;
}