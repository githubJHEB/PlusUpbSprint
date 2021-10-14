let registros = [];

//Ejecutando funciones
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn_registrar_usuario").addEventListener("click", register);
window.addEventListener("resize", anchoPage);

//Declarando variables
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");

    //FUNCIONES

function anchoPage(){

    if (window.innerWidth > 850){
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "block";
    }else{
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";   
    }
}

anchoPage();


    function iniciarSesion(){
        if (window.innerWidth > 850){
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "10px";
            formulario_register.style.display = "none";
            caja_trasera_register.style.opacity = "1";
            caja_trasera_login.style.opacity = "0";
        }else{
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_register.style.display = "none";
            caja_trasera_register.style.display = "block";
            caja_trasera_login.style.display = "none";
        }
    }

    function register(){
        if (window.innerWidth > 850){
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "410px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.opacity = "0";
            caja_trasera_login.style.opacity = "1";
        }else{
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.display = "none";
            caja_trasera_login.style.display = "block";
            caja_trasera_login.style.opacity = "1";
        }
}



function validar_nombre_usuario(string){
    var nombre;
    nombre = document.getElementById("in_nombre_usuario").value;
    if (nombre.length<6){
      return false;
    }else{
      return true;
    }
  }
  function validar_contrasena(string){
   var nombre;
   nombre=document.getElementById("in_contrasena");
   
  if (nombre.length<6){
    return false;
  }else{
    return true;
  } 
  }  
  function confirmar_contrasena(string){
    var nombre1;
    var nombre2;
    nombre1=document.getElementById("in_contrasena").value;
    nombre2=document.getElementById("in_confirmar_contrasena").value;
    if (nombre1.value==nombre2.value){
      return true;
    }else{
      return false;
    }
  }

  
  
function agregarRegistro(){
	var usuario = document.getElementById("in_nombre_usuario").value;
		var contrasena = document.getElementById("in_contrasena").value;
		var confirmar_contrasena = document.getElementById("in_confirmar_contrasena").value;
	function Persona(usuario, contrasena, confirmar_contrasena){
		
		this.usuario = usuario;
		this.contrasena = contrasena;
		this.confirmar_contrasena = confirmar_contrasena;
}
nuevoUsuario = new Persona(usuario, contrasena, confirmar_contrasena);
	registros.push(nuevoUsuario);
	console.log(registros);
}
    
    
function OrdenarArreglo(arreglo){
    arreglo = arreglo.sort(function (a, b) {
        if (a.usuario > b.usuario) {
            return 1;
        }
        if (a.usuario< b.usuario) {
            return -1;
        }
        return 0;
    });
     return arreglo;
}