let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0}
]
let esNuevo=false

mostrarOpcionEmpleado=function(){
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarEmpleado();
}
mostrarOpcionRol=function(){
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
    deshabilitarComponente("botonGuardar");
    mostrarRoles();
}
mostrarOpcionResumen=function(){
    mostrarComponente("divResumen");
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
}
mostrarEmpleado=function(){
    let cmpTabla=document.getElementById("tablaEmpleados");
    let contenidoTabla="<table id=\"contenidoTabla\"><tr>"
    +"<th>CEDULA</th>"
    +"<th>NOMBRE</th>"
    +"<th>APELLIDO</th>"
    +"<th>SUELDO</th>"
    +"</tr>";
    let elementoEmpleado;
    for(let i=0;i<empleados.length;i++){
        elementoEmpleado=empleados[i];
        contenidoTabla+=
        "<tr><td>"+elementoEmpleado.cedula+"</td>"
        +"<td>"+elementoEmpleado.nombre+"</td>"
        +"<td>"+elementoEmpleado.apellido+"</td>"
        +"<td>"+elementoEmpleado.sueldo+"</td>"
        +"</tr>"
    }
    contenidoTabla+="</table>"
    cmpTabla.innerHTML=contenidoTabla;

}
ejecutarNuevo=function(){
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
    esNuevo=true
}
buscarEmpleado=function(cedula){
    let elementoEmpleado;
    let empleadoEncontrado=null
    for(let i=0;i<=empleados.length-1;i++){
        elementoEmpleado=empleados[i]
        if(elementoEmpleado.cedula==cedula){
            empleadoEncontrado=elementoEmpleado
            return empleadoEncontrado;   
        }
    }
        return empleadoEncontrado;
}
agregarEmpleado=function(empleado){
    let nuevoEmpleado;
    let agregaEmpleado=false;
    nuevoEmpleado=buscarEmpleado(empleado.cedula);
    if(nuevoEmpleado == null){
        empleados.push(empleado);
        agregaEmpleado=true
        return agregaEmpleado;
    }else{
        return agregaEmpleado;
    }
}
guardar=function(){
    let valorCedula;
    let valorNombre;
    let valorApellido;
    let valorSueldo;
    valorCedula=recuperarTexto("txtCedula");
    valorNombre=recuperarTexto("txtNombre");
    valorApellido=recuperarTexto("txtApellido");
    valorSueldo=recuperarTexto("txtSueldo");
    if(validaciones(valorCedula,valorNombre,valorApellido,valorSueldo)==false){
        if(esNuevo==true){
            let empleado={};
            let nuevoEmpleado;
            empleado.cedula=valorCedula;
            empleado.nombre=valorNombre;
            empleado.apellido=valorApellido;
            empleado.sueldo=valorSueldo;
            nuevoEmpleado=agregarEmpleado(empleado);
            if(nuevoEmpleado==true){
                alert("EMPLEADO GUARDADO CORRECTAMENTE");
                mostrarEmpleado();
                deshabilitarDatos();
                esNuevo=false
            }else{
                alert("YA EXISTE UN EMPLEADO CON LA CEDULA: "+empleado.cedula);
            }
            let empleadoEncontrado=buscarEmpleado(empleado.cedula);
            if(empleadoEncontrado!=null){
                empleadoEncontrado.nombre=empleado.nombre;
                empleadoEncontrado.apellido=empleado.apellido;
                empleadoEncontrado.sueldo=empleado.sueldo;
                alert("EMPLEADO MODIFICADO EXITOSAMENTE");
                mostrarEmpleado();
                deshabilitarDatos();
            }

        }
    }
}
validaciones=function(valor1,valor2,valor3,valor4){
    let hayErrores=false
    let valorLetra;
    let resultadoLetra;
    let valorLetra2;
    let resultadoLetra2;
    let valorUnoEntero=parseInt(valor1);
    let valorCuatroFloat=Number.parseFloat(valor4)
    
    if(valor1==""){
        mostrarTexto("lblErrorCedula","CAMPO OBLIGATORIO");
        hayErrores=true
    }else if(valor1.length<10 || valor1.length>10){
            mostrarTexto("lblErrorCedula","DEBE TENER EXACTO 10 CARACTERES");
            hayErrores=true
    }else if(isNaN(valorUnoEntero)){
            mostrarTexto("lblErrorCedula","DEBE INGRESAR UN NUMERO");
            hayErrores=true
    }

    if(valor2==""){
        mostrarTexto("lblErrorNombre","CAMPO OBLIGATORIO");
        hayErrores=true
    }else if(valor2.length<3){
            mostrarTexto("lblErrorNombre","DEBE TENER ALMENOS 3 CARACTERES");
            hayErrores=true
    }else for(let i=0;i<=valor2.length-1;i++){
            valorLetra=valor2.charAt(i);
            resultadoLetra=esMayuscula(valorLetra);
            if(resultadoLetra==false){
                mostrarTexto("lblErrorNombre","TODOS LOS CARACTERES DEBEN SER MAYUSCULA");
                hayErrores=true
                break;
            }
    }
    if(valor3==""){
        mostrarTexto("lblErrorApellido","CAMPO OBLIGATORIO");
        hayErrores=true
    }else if(valor3.length<3){
            mostrarTexto("lblErrorApellido","DEBE TENER ALMENOS 3 CARACTERES");
            hayErrores=true
    }else for(let i=0;i<=valor3.length-1;i++){
            valorLetra2=valor3.charAt(i);
            resultadoLetra2=esMayuscula(valorLetra2);
            if(resultadoLetra2==false){
                mostrarTexto("lblErrorApellido","TODOS LOS CARACTERES DEBEN SER MAYUSCULA");
                hayErrores=true
                break;
            }
    }
    if(valor4==""){
        mostrarTexto("lblErrorSueldo","CAMPO OBLIGATORIO");
        hayErrores=true
    }else if(valor4<400 || valor4>5000){
            mostrarTexto("lblErrorSueldo","SUELDO ENTRE 400 Y 5000");
            hayErrores=true
    }else if(isNaN(valorCuatroFloat) ){
            mostrarTexto("lblErrorSueldo","DEBE INGRESAR UN NUMERO FLOTANTE");
            hayErrores=true
    }
    return hayErrores;
}
deshabilitarDatos=function(){
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
}
// Se agrega Parte 4 modificar empleado
ejecutarBusqueda=function(){
    let valorCedula;
    let empleado;
    valorCedula=recuperarTexto("txtBusquedaCedula");
    empleado=buscarEmpleado(valorCedula);
    if(empleado == null){
        alert("EMPLEADO NO EXISTE");
    }else{
        mostrarTextoEnCaja("txtCedula",empleado.cedula);
        mostrarTextoEnCaja("txtNombre",empleado.nombre);
        mostrarTextoEnCaja("txtApellido",empleado.apellido);
        mostrarTextoEnCaja("txtSueldo",empleado.sueldo);
        deshabilitarComponente("txtCedula");
        habilitarComponente("txtNombre");
        habilitarComponente("txtApellido");
        habilitarComponente("txtSueldo");
    }

}
limpiar=function(){
    mostrarTextoEnCaja("txtCedula","");
    mostrarTextoEnCaja("txtNombre","");
    mostrarTextoEnCaja("txtApellido","");
    mostrarTextoEnCaja("txtSueldo","");
    esNuevo=false;
    deshabilitarDatos();
}

buscarPorRol=function(){
    let cedula;
    let empleadoEncontrado;
    cedula=recuperarTexto("txtBusquedaCedulaRol");
    empleadoEncontrado=buscarEmpleado(cedula)
    if(empleadoEncontrado!=null){
        mostrarTexto("infoCedula",empleadoEncontrado.cedula);
        mostrarTexto("infoNombre",empleadoEncontrado.nombre+" "+empleadoEncontrado.apellido);
        mostrarTexto("infoSueldo",empleadoEncontrado.sueldo);
    }else{
        alert("EL EMPLEADO NO EXISTE")
    }
}