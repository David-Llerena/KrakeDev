
probarAtributos=function(){
    let persona={
        nombre: "Pedro",
        apellido: "Morales",
        edad:24,
        estaVivo: true
    }
    console.log(persona.nombre);
    console.log(persona.edad);
    if(persona.estaVivo=false){
        console.log("No esta vivo");
    }else{
        console.log("Si esta vivo");
    }
}