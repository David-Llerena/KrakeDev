
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
crearProducto=function(){
    let producto1={
        nombre:"Manzana",
        precio: 2.50,
        stock: 5,
    }
    let producto2={
        nombre:"Pera",
        precio: 2.75,
        stock: 6,
    }
    console.log(producto1.nombre);
    console.log(producto2.precio);
    if(producto1.stock>producto2.stock){
        console.log("Producto 1 tiene mayor stock");
    }else if(producto1.stock<producto2.stock){
        console.log("Producto 2 tiene mayor stock");
    }else{
        console.log("Ambos productos tiene el mismo stock")
        }
}