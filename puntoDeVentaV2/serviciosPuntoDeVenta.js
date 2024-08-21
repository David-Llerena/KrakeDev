calcularValorDescuento=function(monto,porcentajeDescuento){
    let descuento=(monto * porcentajeDescuento)/100;
    return descuento;
}
calcularIVA=function(monto){
    const porcentajeIVA= 0.12; //lo dejo como constante para que no pueda modificar
    let iva = monto * porcentajeIVA;
    return iva;
}
calcularSubtotal=function(precio,cantidad){
    let valorSubtotal= precio * cantidad;
    return valorSubtotal;
}
calcularTotal=function(subtotal,descuento,iva){
    let valorPagar;
    valorPagar=subtotal-descuento+iva;
    return valorPagar;
}   
calcularDescuentPorVolumen=function(subtotal,cantidad){
    if (cantidad<3){
        let valorDescuento=0;
        valorDescuento=subtotal*valorDescuento;
        return valorDescuento;
    }else if(cantidad>=3 && cantidad<=5){   
        let valorDescuento=0.03;
        valorDescuento=subtotal*valorDescuento;
        return valorDescuento;
    }else if(cantidad>=6 && cantidad<=11){
        let valorDescuento=0.04;
        valorDescuento=subtotal*valorDescuento;
        return valorDescuento;
    }else if(cantidad>=12){
        let valorDescuento=0.05;
        valorDescuento=subtotal*valorDescuento;
        return valorDescuento;
    }
}
esProducto=function(nombreProducto, idcomponenteError){
    if(nombreProducto.length === 0){//no se pero ese === me salio en chatgpt y no se que significa :c
        mostrarTexto(idcomponenteError,"CAMPO OBLIGATORIO");
    } else if(nombreProducto.length > 10){
        mostrarTexto(idcomponenteError, "NOMBRE INVALIDO");
    }else{
        mostrarTexto(idcomponenteError,"");
    }
}

esCantidadValida=function(cantidad,idcomponenteError){
    if(isNaN(cantidad)){
        mostrarTexto(idcomponenteError,"CAMPO OBLIGATORIO");
    }else if(cantidad < 0 || cantidad > 100){
        mostrarTexto(idcomponenteError, "CANTIDAD INVALIDO");
    }else{
        mostrarTexto(idcomponenteError,"");
    }
}

esPrecioValido=function(precio,idcomponenteError){
    if(isNaN(precio)){
        mostrarTexto(idcomponenteError,"CAMPO OBLIGATORIO");
    }else if(precio < 0 || precio > 50){
        mostrarTexto(idcomponenteError, "PRECIO INVALIDO");
    }else{
        mostrarTexto(idcomponenteError,"");
    }
}
        