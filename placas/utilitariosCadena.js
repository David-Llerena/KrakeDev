function esMayuscula(caracter){
    let caracterObtenido=caracter.charCodeAt(0);
    if(caracterObtenido>=65 && caracterObtenido<=90){
        return true;
    }else{
        return false;
    }
}

function esDigito(caracter){
    let caracterObtenido=caracter.charCodeAt(0);
    if(caracterObtenido>=48 && caracterObtenido<=57){
        return true;
    }else{
        return false;
    }
}

function esGuion(caracter){
    let caracterObtenido=caracter.charCodeAt(0);
    if(caracterObtenido==45){
        return true;
    }else{
        return false;
    }
}