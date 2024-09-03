let personas = [
    { nombre: "Marcos", edad: 18 },
    { nombre: "Roberto", edad: 15 },
    { nombre: "Kate", edad: 25 },
    { nombre: "Diana", edad: 12 },
    { nombre: "Benja", edad: 5 }
  ];

agregarPersona=function(){
    let nombrePersona=recuperarTexto("txtNombre");
    let edadPersona=recuperarTexto("txtEdad");
    let personaSinError=true;
    if(nombrePersona.length < 3){
        mostrarTexto("lblErrorNombre","DEBE TENER AL MENOS TRES CARACTERES");
        return personaSinError=false;
    }
    if(edadPersona.length <=0 || edadPersona.length>100  ){
        mostrarTexto("lblErrorEdad","DEBE TENER UNA EDAD ENTRE 0 Y 100")
        return personaSinError=false;
    }
    if(personaSinError==true){
        let  nuevaPersona={};
        nuevaPersona.nombre=nombrePersona;
        nuevaPersona.edad=edadPersona;
        personas.push(nuevaPersona);
        alert("PERSONA AGREGADA CORRECTAMENTE");
        mostrarPersonas();
    }   

}
mostrarPersonas=function(){
    let cmpTabla=document.getElementById("tablaPersona");
    let contenidoTabla="<table id=\"contenidoTabla\"><tr>"
    +"<th>EDAD</th>"
    +"<th>NOMBRE</th>"
    +"</tr>";
    let elementoPersona;
    for(let i=0;i<personas.length;i++){
        elementoPersona=personas[i];
        contenidoTabla+=
        "<tr><td>"+elementoPersona.edad+"</td>"
        +"<td>"+elementoPersona.nombre+"</td>"
        +"</tr>"
    }
    contenidoTabla+="</table>";
    cmpTabla.innerHTML= contenidoTabla;

}
encontrarMayor=function(){
    let personaMayor= personas[0];
    for(let i=1;i<personas.length;i++){
        if (personas[i].edad>personaMayor.edad) {  
            personaMayor=personas[i];
                  
        }
    }   
    return personaMayor; 
    // console.log("La persona mayor es: "+personaMayor.nombre);
}
determinarMayor=function(){
    let mayor = encontrarMayor();
    mostrarTexto("lblPersonaMayor", "La persona mayor es "+mayor.nombre+" con una edad de "+mayor.edad);
}
encontrarMenor=function(){
    let personaMenor= personas[0];
    for(let i=1;i<personas.length;i++){
        if (personas[i].edad<personaMenor.edad) {  
            personaMenor=personas[i];
                  
        }
    }   
    return personaMenor; 
    // console.log("La persona mayor es: "+personaMayor.nombre);
}
determinarMenor=function(){
    let menor = encontrarMenor();
    mostrarTexto("lblPersonaMenor", "La persona menor es "+menor.nombre+" con una edad de "+menor.edad);
}