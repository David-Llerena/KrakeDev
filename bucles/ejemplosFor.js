mostrarNumeros=function(){
        console.log("Antes del for");
        for(let i=0;i<4;i++){
            console.log(i);
        }
        console.log("despues del for");
}
mostrarNumeros2=function(){
    console.log("Antes del for");
    for(let indice=1;indice<=5;indice++){
        console.log(indice);
    }
    console.log("despues del for");
}
mostrarPares=function(){
    console.log("Antes del for");
    for(let x=2;x<=10;x+=2){
        console.log(x)
    }
    console.log("Despues del for")
}
mostrarInverso = function(){
    console.log("Antes del for");
    for(let i=10;i>0;i--){
        console.log(i)
    }
    console.log("Despues del for")
}
hackerNasaPelis = function(){
    for(let porcentaje=0;porcentaje<=100;porcentaje+=10){
        console.log("Hackeando Nasa "+porcentaje+" %");
    }
    console.log("La nasa ha sido Hackeada");
}
mostrarImpares=function(){
    console.log("Antes del for");
    for(let x=1;x<=21;x+=2){
        console.log(x)
    }
    console.log("Despues del for")
}