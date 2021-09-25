/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




var nombreUsuario = document.getElementById("in_nombre_usuario");
var contrasena = document.getElementById("in_contrasena");
var valContrasena = document.getElementById("in_confirmar_contrasena");
var error = document.getElementById("error");
error.style.color = "blue";

function myFunctionX() {
  var nombreUsuario1 = "Mario";
  //var x = nombreUsuario.value;
  document.getElementById("demo").innerHTML = "You wrote: " + x;
  if (nombreUsuario1 == x){
  document.getElementById("demo1").innerHTML = "Ready" ;
  //document.getElementById("demo").innerHTML = Date();

  //} else {
  //    document.getElementById("demo1").innerHTML = "You wrote: " + x;
  }
}

function isLetter(string){
    var letras = "ABCDEGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var valueToReturn = true;
    for (var i = 0; i < string.value.length; i++) {
        if (!(letras.includes(string.value.charAt(i)))) {
            valueToReturn = false;
            //alert(string.value.charAt(i) + "i");
            break;
        } 
        
    }
    //alert(valueToReturn);
    return valueToReturn;
}

function isNumber(string){
    var numeros = "0123456789";
    var valueToReturn = true;
    for (var i = 0; i < string.value.length; i++) {
        if (!(numeros.includes(string.value.charAt(i)))) {
            valueToReturn = false;
            //alert(string.value.charAt(i) + "i");
            break;
        } 
        
    }
    //alert(valueToReturn);
    return valueToReturn;
}

function doubleCheck(string){
    var numeros = "0123456789";
    var letras = "ABCDEGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    
    var valueToReturn = true;
    for (var i = 0; i < string.value.length; i++) {
        if (!(numeros.includes(string.value.charAt(i)))) {
            if (!(letras.includes(string.value.charAt(i)))) {
                valueToReturn = false;
                break;
            }             
        }      
    }
   return valueToReturn;
}

function huy(){
    var numeros = "0123456789";
    var entrada = document.getElementById("in_nombre_usuario")
    var valueToReturn = true;
    for (var i = 0; i < entrada.value.length; i++) {
        if (!(numeros.includes(entrada.value.charAt(i)))) {
            valueToReturn = false;
            alert(entrada.value.charAt(i) + "i");
            i = entrada.value.length;
        } 
        
    }
    alert(valueToReturn);
    return valueToReturn;
}
function myFunction(string) {
    var entrada1 = document.getElementById("in_nombre_usuario");
    var entrada = document.getElementById("in_contrasena")
    alert(isNumber(entrada)+" from_main_number");
    alert(isLetter(entrada)+" from_main_letter");
 
    validar_contrasena(entrada);
    //validar_nombre_usuario(entrada1);
    
}


function validar_nombre_usuario(string){
    if((string.value.length>=6 && string.value.length<=30) && isLetter(string)){
        alert("Usuario true");
        return true;
    } else {
        alert("Usuario false");
        return false;
    }
}

function validar_contrasena(string){
    if(string.value.length>=6 &&  doubleCheck(string)){
        alert("Contrasena true");
        return true;
    } else {
        alert("Contrasena false");
        return false;
    }
}


function confirmar_contrasena(string){
    
}

module.export.validar_nombre_usuario = validar_nombre_usuario;
module.export.validar_validar_contrasena = validar_contrasena;
module.export.confirmar_contrasena = confirmar_contrasena;