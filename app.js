'use strict';


let generar = document.getElementById("button-generar");
let simbolos = document.getElementById("simbolos");
let largo = document.getElementById("largo");
let numeros = document.getElementById("numeros");
let mayusculas = document.getElementById("mayusculas");
let contrasena=document.getElementById("contrasena");



const numbers="0123456789";
const symbols="!@#$%^&*()_-+=";
const lowerLetters="qwertyuiopasdfghjklzxcvbnm";
const upperLetters="QWERTYUIOPASDFGHJKLZXCVBNM";

let min=10;
let max=11;

function generarNumbers(min,max){
    contrasena.value= numbers[Math.random() * (max - min) ]
    console.log(contrasena.value);
}

function addSimbolos(){
    contrasena.value=symbols[Math.random()]
}




generar.addEventListener("click", generarNumbers);