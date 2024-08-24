//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta; //Paso 1
esMayuscula = function(caracter){
    let codigo = caracter.charCodeAt(0);
    if (codigo >= 65 && codigo <= 90) {
      return true;
    } else {
      return false;
    }
  }

const guardarPalabra = () => {
    let sonMayusculas;
    const secreta = recuperarTexto("txtSecreta");
    for (let posicion = 0; posicion < secreta.length; posicion++) {
      if (esMayuscula(secreta.charAt(posicion))) {
        sonMayusculas = true;
      } else {
        sonMayusculas = false;
      }
    }
    if (secreta.length != 5 || !sonMayusculas) {
      alert("Las 5 palabras deben ser mayusculas");
    } else {
      palabraSecreta = secreta;
    }
  }