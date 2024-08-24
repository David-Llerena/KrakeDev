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

guardarPalabra = function(){
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

  mostrarLetra = function(letra, posicion){
    const div = document.getElementById(`div${posicion}`);
    div.innerHTML = letra;
  }

  validar = function(letra){
    let letrasEncontradas = 0;
    for (let char = 0; char < palabraSecreta.length; char++) {
      const letras = palabraSecreta.charAt(char);
      if (letras == letra) {
        mostrarLetra(letra, char);
        letrasEncontradas += 1;
        coincidencias += 1;
      }
    }
    if (letrasEncontradas < 1) {
      alert("La letra no es parte de la palabra");
      errores += 1;
      mostrarAhorcado()
    }
  }

ingreseLetra = function(){
    const letra = recuperarTexto("txtLetra");
    if (esMayuscula(letra)) {
      validar(letra);
      intentos += 1
      if (coincidencias == 5) {
        mostrarImagen("ahorcadoImagen", "./ganador.gif");
      }
      if (intentos == 10) {
        mostrarImagen("ahorcadoImagen", "./gameOver.gif");
      }
    } else {
      alert("SOLO SE ACEPTAN MAYUSCULAS");
    }
  };