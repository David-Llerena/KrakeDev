
numeroAleatorio=function(){
    let numero=0;
    for(let i=0;i<1;i++){
        numero=parseInt(Math.random()*100)+1;
    }
    return numero;
}
generarAleatorios=function(){
    let aleatorio=[];
    let cmpNumero;
    cmpNumero=parseInt(document.getElementById("lblNumero").value);
    if(isNaN(cmpNumero) || cmpNumero < 5 || cmpNumero > 20){
        alert('Por favor, ingrese un número entre 5 y 20');
        return;
    }
    for(let i=0; i<cmpNumero;i++){
        console.log(i);
        let numero=numeroAleatorio();
        aleatorio.push(numero);
    }
    mostrarResultados(aleatorio);
}
mostrarResultados=function(arregloNumeros){
    let resultadosDiv = document.getElementById('resultados');
    let tabla = '<table><tr><th>Índice</th><th>Número</th></tr>';

    for (let i = 0; i < arregloNumeros.length; i++) {
        tabla += `<tr><td>${i}</td><td>${arregloNumeros[i]}</td></tr>`;
    }

    tabla += '</table>';
    resultadosDiv.innerHTML = tabla; 
}