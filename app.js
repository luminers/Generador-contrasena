'use strict';


let generar = document.getElementById("button-generar");
let simbolosEl = document.getElementById("simbolos");
let largoEl = document.getElementById("largo");
let numerosEl = document.getElementById("numeros");
let minusculasEl= document.getElementById("minusculas");
let mayusculasEl = document.getElementById("mayusculas");
let contrasenaEl=document.getElementById("contrasena");



const numbers="0123456789";
const symbols="!@#$%^&*()_-+=";
const lowerLetters="qwertyuiopasdfghjklzxcvbnm";
const upperLetters="QWERTYUIOPASDFGHJKLZXCVBNM";



function GenerarNumeros() {
    return numbers[Math.floor(Math.random()
        *numbers.length)]    
}
function GenerarSimbolos() {
    return symbols[Math.floor(Math.random()
        *symbols.length)]    
}
function GenerarMayusculas() {
    return upperLetters[Math.floor(Math.random()
        *upperLetters.length)]    
}
function GenerarMinusculas() {
    return lowerLetters[Math.floor(Math.random()
        *lowerLetters.length)]    
}

function GenerarContrasena(){
   let largo=largoEl.value;
   let contrasena="";

   for (let i = 0; i < largo; i++) {
       contrasena+=GenerarX();
       
   }

   contrasenaEl.value=contrasena;
    

}

function GenerarX(){
    let xs=[]

    if(numerosEl.checked){
        xs.push(GenerarNumeros());
    
    }

    if(simbolosEl.checked){
        xs.push(GenerarSimbolos());
    }

    if(minusculasEl.checked){
        xs.push(GenerarMinusculas());
    }

    if(mayusculasEl.checked){
        xs.push(GenerarMayusculas());
    }


    if (xs.length==0){
        return " "
    }else{
        return xs[Math.floor(Math.random() * xs.length)];
    }
}

generar.addEventListener("click", GenerarContrasena)
