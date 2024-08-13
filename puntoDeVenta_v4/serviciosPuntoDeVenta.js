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
    let desct=calcularValorDescuento(subtotal,descuento);
    let valorIva=calcularIVA(subtotal);
    valorPagar=subtotal-desct+valorIva;
}   