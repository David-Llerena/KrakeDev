let personas = [
    { nombre: "Marcos", edad: 18 },
    { nombre: "Roberto", edad: 15 },
    { nombre: "Kate", edad: 25 },
    { nombre: "Diana", edad: 12 },
    { nombre: "Benia", edad: 5 }
  ];

agregarPersona=function(){
    let nombrePersona=recuperarTexto("txtNombre");
    let edadPersona=recuperarTexto("txtEdad");
    if(nombrePersona.length < 3){
        mostrarTexto("lblErrorNombre","DEBE TENER AL MENOS TRES CARACTERES");
    }
    if(edadPersona.length < 0 || edadPersona.length>100 ){
        mostrarTexto("lblErrorEdad","DEBE TENER UNA EDAD EENTRE 0 Y 100")
    }

}