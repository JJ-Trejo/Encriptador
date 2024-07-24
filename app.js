//Se activa con el boton Encriptar
function llamaFuncionEncriptador(){
  cambiarContenido();
  encriptacion();
}

//Se activa con el boton Desencriptar
function llamaFuncionDesencriptador(){
  cambiarContenido();
  desencriptacion();
}

function cambiarContenido(){
    //Esta función se ejecuta cuando se da click en el boton Encriptar
    //esconde los elementos ubicados en el texto de salida al dar click
    //otra opción posible a usar: document.getElementById("salida_eliminar").style.visibility="hidden";

    var image = document.getElementById('salida_eliminar');
    var text = document.getElementById('salida_resultado_id');
    var botonCopiar = document.getElementById('bloque_boton_copiar_id');

    //recibe el texto ingresado por el usuario
    let textoUsuario = document.getElementById('presentacion_texto_id').value;

    //Si el usuario ingresó cualquier texto
    if ( textoUsuario.length >= 1 ) {
      image.style.display = 'none'; //Se esconde la imagen
      text.style.display = 'block'; //Se muestra el texto desencriptado
      botonCopiar.style.display = 'block'; //Se muestra el boton copiar desencriptado
      
    }
    else{
      image.style.display = 'block'; //Se muestra la imgaen
      text.style.display = 'none';   //Se esconde el texto desencriptado
      botonCopiar.style.display = 'none'; //Se muestra el boton copiar desencriptado
    }
}

function encriptacion(){

    //obtiene el elemento <textarea> mediante su id "presentacion_texto", Luego, obtiene el valor del <textarea> accediendo a la propiedad value.
    let textoUsuario = document.getElementById('presentacion_texto_id').value;

    // otra opcion usando clases (query selector)
    //var textoUsuario = document.querySelector('.presentacion_texto').value;

    let textoDesencriptado = "";

    for(let i = 0; i < textoUsuario.length ; i++){

      //console.log("hola");

      if (textoUsuario[i] === "a" ) {
        textoDesencriptado += "ai";
      }
      else if (textoUsuario[i] === "e" ) {
        textoDesencriptado += "enter";
      }
      else if (textoUsuario[i] === "i" ) {
        textoDesencriptado += "imes";
      }
      else if (textoUsuario[i] === "o" ) {
        textoDesencriptado += "ober";
      }
      else if (textoUsuario[i] === "u" ) {
        textoDesencriptado += "ufat";
      }
      else{
        textoDesencriptado += textoUsuario[i];
      }

    }

    //llama a la funcion para cambiar el texto resultado
    asignaTextoElemento(".salida_resultado",textoDesencriptado);
}

function asignaTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;

}

const decryptionKeys = {
  'enter': 'e',
  'imes': 'i',
  'ai': 'a',
  'ober': 'o',
  'ufat': 'u'
}

function desencriptacion(){

  //obtiene el elemento <textarea> mediante su id "presentacion_texto", Luego, obtiene el valor del <textarea> accediendo a la propiedad value.
  let textoUsuario = document.getElementById('presentacion_texto_id').value;

  // otra opcion usando clases (query selector)
  //var textoUsuario = document.querySelector('.presentacion_texto').value;

  
  let textoDesencriptado = textoUsuario.replace(/enter|imes|ai|ober|ufat/g, function(match){ return decryptionKeys[match]});
  
  //llama a la funcion para cambiar el texto resultado
  asignaTextoElemento(".salida_resultado",textoDesencriptado);

}

//*******************************FUNCION PRUEBA***********************//

        // Función para copiar el texto del div 'result' al portapapeles.
        function copyToClipboard() {
          let resultText = document.getElementById('salida_resultado_id').innerText;
          navigator.clipboard.writeText(resultText)}

          /*
          .then(() => {
              alert('Texto copiado al portapapeles');
          }).catch(err => {
              console.error('Error al copiar el texto: ', err);
          });
          } 
          */