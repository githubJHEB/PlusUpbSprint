let registros = [];

function validar_nombre_usuario(string){
     valor = document.getElementById("in_nombre_usuario").value;
	if (/^[a-zA-Z]{6,30}/.test(valor)){
		return true;
     }else{
          return false;
	}
}
function validar_contrasena(string){
     var key = string.keyCode,
  tecla = String.fromCharCode(key).toLowerCase(),
  letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789",
  especiales = [8, 37, 39, 46],
  tecla_especial = false;

for (var i in especiales) {
  if (key == especiales[i]) {
    tecla_especial = true;
    break;
  }
}

if (letras.indexOf(tecla) == -1 && !tecla_especial) {
  return false;
}

}
function confirmar_contrasena(string){

}

function agregarRegistro(){  /*Add function agregarRegistro jheb*/
  var usuario = document.getElementById("in_nombre_usuario").value;
  var contrasena = document.getElementById("in_contrasena").value;
  var confirmar_contrasena = document.getElementById("in_confirmar_contrasena").value;
  nuevoUsuario = [usuario, contrasena, confirmar_contrasena];
  registros.push(nuevoUsuario);
}


function OrdenarArreglo(arreglo){  /*Add function OrdenarRegistro jheb*/
  arreglo = arreglo.sort(function (a, b) {
      if (a > b) {
          return 1;
      }
      if (a< b) {
          return -1;
      }
      return 0;
  });
   return arreglo;
}

module.exports.validar_nombre_usuario=validar_nombre_usuario;
module.exports.validar_contrasena=validar_contrasena;
module.exports.confirmar_contrasena=confirmar_contrasena;
