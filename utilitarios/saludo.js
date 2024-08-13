saludar=function(){
    //recuperar el valor de la caja de texto
    let nombre=recuperarTexto("txtNombre");
    let apellido=recuperarTexto("txtApellido");
    let edad=recuperarInt("txtEdad");
    let estatura=recuperarFloat("txtEstatura");
    let msjBienvenida=("Bienvenido "+nombre+" "+apellido);
    mostrarTexto("lblResultado",msjBienvenida);
    mostrarImagen("imgSaludo","./imagenes/saludo.gif");
    mostrarTextoEnCaja("txtNombre", "");
}
