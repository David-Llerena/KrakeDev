calcularTasaInteres=function(ingresoAnual){
    let tasaInteres;
    let valorTasa;
    if(ingresoAnual<300000){
        tasaInteres=0.16;
        valorTasa=ingresoAnual*tasaInteres;
        return valorTasa;
    }else if(ingresoAnual>=300000 && ingresoAnual<500000){
        tasaInteres=0.15;
        valorTasa=ingresoAnual*tasaInteres;
        return valorTasa;
    }else if(ingresoAnual>=500000 && ingresoAnual<1000000){
        tasaInteres=0.14;
        valorTasa=ingresoAnual*tasaInteres;
        return valorTasa;
    }else if(ingresoAnual>=1000000 && ingresoAnual<2000000){
        tasaInteres=0.13;
        valorTasa=ingresoAnual*tasaInteres;
        return valorTasa;
    }else if(ingresoAnual>=2000000){
        tasaInteres=0.12;
        valorTasa=ingresoAnual*tasaInteres;
        return valorTasa;
    }//talvez sea necesario colocar una condicion para poder saber si es un numero o no
}
calcularCapacidadPago=function(edad,ingresos,egresos){
    let cuota;
    let valorCuota;
    if(edad>50){
        let capacidad=0.30;
        cuota=egresos-ingresos;
        valorCuota=cuota*capacidad;
        return valorCuota;
    }else if(edad<=50){
        let capacidad=0.40;
        cuota=egresos-ingresos;
        valorCuota=cuota*capacidad;
        return valorCuota;
    }
}
calcularDescuento=function(precio,cantidad){
    let valorPagar;
    let precioDescuento
    let descuento;
    if(cantidad<3){
        descuento=0;
        precioDescuento=precio*descuento;
        valorPagar=precio-precioDescuento;
        return valorPagar;
    }else if(cantidad>=3 && cantidad<=5){
        descuento=0.02;
        precioDescuento=precio*descuento;
        valorPagar=precio-precioDescuento;
        return valorPagar;
    }else if(cantidad>=6 && cantidad<=11){
        descuento=0.03;
        precioDescuento=precio*descuento;
        valorPagar=precio-precioDescuento;
        return valorPagar;
    }else if(cantidad>=12){
        descuento=0.04;
        precioDescuento=precio*descuento;
        valorPagar=precio-precioDescuento;
        return valorPagar;
    }
}
determinarColesterolLDL=function(nivelColesterol){
    let valorColesterol;
    if(nivelColesterol<100){
        valorColesterol="Menos de 100 mg/dl óptimo";
        return valorColesterol;
    } else if(nivelColesterol>=100 && nivelColesterol<=129){
        valorColesterol="Entre 100 y 129 mg/dl casi óptimo";
        return valorColesterol;
    } else if(nivelColesterol>=130 && nivelColesterol<=159){
        valorColesterol="Entre 130 y 159 mg/dl limite superior del rango normal";
        return valorColesterol;
    } else if(nivelColesterol>=160 && nivelColesterol<=189){
        valorColesterol="Entre 160 y 189 mg/dl alto";
        return valorColesterol;
    }else if(nivelColesterol>=190){
        valorColesterol="190 0 más mg/dl alto";
        return valorColesterol;
    }
}
validaClave=function(clave){
    let caracteres=clave.length;
    if(caracteres>=8 && caracteres<=16){
        return true;
    }else{
        return false;
    }
}
esMayuscula=function(caracter){
    let numeroCaracter=caracter.charCodeAt(0);
    if(numeroCaracter>=65 && numeroCaracter<=90){
        return true;
    }else{
        return false;
    }
}
esMinuscula=function(caracter){
    let numeroCaracter=caracter.charCodeAt(0);
    if(numeroCaracter>=97 && numeroCaracter<=122){
        return true;
    }else{
        return false;
    }
}
esDigito=function(caracter){
    let numeroCaracter=caracter.charCodeAt(0);
    if(numeroCaracter>=48 && numeroCaracter<=57){
        return true;
    }else{
        return false;
    }
}
darPermiso=function(notaMatematica,notaFisica,notaGeometria){
    if(notaMatematica>=90 || notaFisica>=90 || notaGeometria>=90){
        return true;
    }else{
        return false;
    }
}
obtenerPermiso=function(notaMatematica,notaFisica,notaGeometria){
    if(notaMatematica>=90 || notaFisica>=90 && notaGeometria>=80){
        return true;
    }else{
        return false;
    }
}
dejarSalir=function(notaMatematica,notaFisica,notaGeometria){
    if(notaMatematica>=90 || notaFisica>=90 || notaGeometria>=80 && notaFisica>notaMatematica){
        return true;
    }else{
        return false;
    }
}